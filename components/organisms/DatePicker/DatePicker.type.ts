import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { ComponentPropsFull } from '@/types/components';

export interface DatePickerProps extends Pick<ComponentPropsFull, 'fullWidth' | 'fullRadius'> {
    value?: Date;
    onChange?: (event: DateTimePickerEvent, date?: Date) => void;
    minimumDate?: Date;
    maximumDate?: Date;
    disabled?: boolean;
}
