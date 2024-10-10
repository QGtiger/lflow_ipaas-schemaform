import * as react from 'react';
import { FormProps, FormInstance } from 'antd';

interface IPaasSchemaFormStoreInfer {
    editorMap?: Record<string, (props: any) => React.ReactNode>;
    editorLayoutWithDesc?: (editor: React.ReactNode, desc: React.ReactNode) => React.ReactNode;
    dynamicScriptExcuteWithOptions?: (config: {
        script: string;
        extParams: Record<string, any>;
    }) => Promise<{
        value: any;
        label: any;
    }[]>;
    dynamicScriptExcuteWithFormSchema?: (config: {
        script: string;
    }) => Promise<IpaasFormSchema[]>;
}

declare const IPaasSchemaForm: react.ForwardRefExoticComponent<{
    schema: IpaasFormSchema[];
} & IPaasSchemaFormStoreInfer & FormProps<any> & react.RefAttributes<FormInstance<any>>>;

export { IPaasSchemaForm };
