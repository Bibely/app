import fs from 'fs';
import path from 'path';

import { ensureDirectoryExists } from '@/utils/fileSystem';

/* ----------------------------- 타입 정의 ----------------------------- */
type ThemeValue = string | number;
type TokenCategory =
  | Record<string, ThemeValue>
  | { light: Record<string, ThemeValue>; dark: Record<string, ThemeValue> };
type TokenStructure = Record<string, TokenCategory>;

/* ----------------------------- 설정 ----------------------------- */
const CONFIG = {
  tokenPath: path.resolve(__dirname, '../token/token.json'),
  output: { constants: path.resolve(__dirname, '../constants/token/') },
} as const;

/* ----------------------------- 유틸 ----------------------------- */
/** 재귀적으로 디렉터리 삭제 */
function removeDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) return;

  fs.readdirSync(dirPath).forEach(file => {
    const curPath = path.join(dirPath, file);
    if (fs.lstatSync(curPath).isDirectory()) removeDirectory(curPath);
    else fs.unlinkSync(curPath);
  });
  fs.rmdirSync(dirPath);
}

/** 첫 글자 대문자 */
const firstLetterToUpperCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** 파일 이름 변환 (colors → colors.ts) */
const toFileName = (s: string) => `${s}.ts`;

/* ----------------------------- 상수 생성기 ----------------------------- */
function generateConstants(_category: string, values: TokenCategory) {
  // isColorCategory 로 분기할 수도 있지만, 현재는 동일하게 처리
  return generateNestedObject(values, 1);
}

/** 중첩 객체를 문자열로 변환 */
function generateNestedObject(obj: Record<string, any>, depth: number): string {
  const indent = '    '.repeat(depth);
  return (
    Object.entries(obj)
      .map(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          return `${indent}${key}: {\n${generateNestedObject(value, depth + 1)}${indent}},`;
        }
        return `${indent}${key}: ${formatValue(value)},`;
      })
      .join('\n') + '\n'
  );
}

/** 값 포맷팅 */
function formatValue(value: ThemeValue): string {
  return typeof value === 'number' ? value.toString() : `'${value}'`;
}

/* ----------------------------- 메인 로직 ----------------------------- */
try {
  /* 1) 출력 디렉터리 초기화 */
  removeDirectory(CONFIG.output.constants);
  ensureDirectoryExists(CONFIG.output.constants);

  /* 2) 토큰 로드 */
  const tokenContent = JSON.parse(fs.readFileSync(CONFIG.tokenPath, 'utf8')) as TokenStructure;
  if (!tokenContent) throw new Error('❌ 디자인 토큰 파일을 찾을 수 없습니다.');

  /* 3) 카테고리별 파일 생성 + export 목록 수집 */
  const generatedExports: string[] = [];

  Object.entries(tokenContent).forEach(([category, values]) => {
    const varName = firstLetterToUpperCase(category);
    generatedExports.push(varName);

    const fileContent =
      `/* Auto-generated code. DO NOT modify directly. */\n` +
      `/* To make changes, edit src/token/token.json */\n\n` +
      `export const ${varName} = {\n${generateConstants(category, values)}} as const;`;

    fs.writeFileSync(path.join(CONFIG.output.constants, toFileName(category)), fileContent);
  });

  /* 4) 배럴 파일(index.ts) 생성 */
  const indexContent =
    `/* Auto-generated barrel file. DO NOT modify directly. */\n` +
    `/* Re‑exports all design‑token constants */\n\n` +
    generatedExports
      .map(name => {
        const file = name.charAt(0).toLowerCase() + name.slice(1);
        return `export { ${name} } from "./${file}";`;
      })
      .join('\n') +
    '\n';

  fs.writeFileSync(path.join(CONFIG.output.constants, 'index.ts'), indexContent);

  console.log('✅ 모든 상수 파일과 index.ts 가 생성되었습니다.');
} catch (err) {
  throw new Error(`❌ 토큰 생성 중 오류가 발생했습니다.\n${err}`);
}
