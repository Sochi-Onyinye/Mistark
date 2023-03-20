/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessCategoryCreateFormInputValues = {
    categoryName?: string;
    categoryDescription?: string;
};
export declare type BusinessCategoryCreateFormValidationValues = {
    categoryName?: ValidationFunction<string>;
    categoryDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessCategoryCreateFormOverridesProps = {
    BusinessCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    categoryName?: PrimitiveOverrideProps<TextFieldProps>;
    categoryDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessCategoryCreateFormInputValues) => BusinessCategoryCreateFormInputValues;
    onSuccess?: (fields: BusinessCategoryCreateFormInputValues) => void;
    onError?: (fields: BusinessCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessCategoryCreateFormInputValues) => BusinessCategoryCreateFormInputValues;
    onValidate?: BusinessCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessCategoryCreateForm(props: BusinessCategoryCreateFormProps): React.ReactElement;
