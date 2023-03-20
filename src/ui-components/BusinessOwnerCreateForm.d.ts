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
export declare type BusinessOwnerCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
};
export declare type BusinessOwnerCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessOwnerCreateFormOverridesProps = {
    BusinessOwnerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessOwnerCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessOwnerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessOwnerCreateFormInputValues) => BusinessOwnerCreateFormInputValues;
    onSuccess?: (fields: BusinessOwnerCreateFormInputValues) => void;
    onError?: (fields: BusinessOwnerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessOwnerCreateFormInputValues) => BusinessOwnerCreateFormInputValues;
    onValidate?: BusinessOwnerCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessOwnerCreateForm(props: BusinessOwnerCreateFormProps): React.ReactElement;
