/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BusinessOwner } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessOwnerUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
};
export declare type BusinessOwnerUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessOwnerUpdateFormOverridesProps = {
    BusinessOwnerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessOwnerUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessOwnerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessOwner?: BusinessOwner;
    onSubmit?: (fields: BusinessOwnerUpdateFormInputValues) => BusinessOwnerUpdateFormInputValues;
    onSuccess?: (fields: BusinessOwnerUpdateFormInputValues) => void;
    onError?: (fields: BusinessOwnerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessOwnerUpdateFormInputValues) => BusinessOwnerUpdateFormInputValues;
    onValidate?: BusinessOwnerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessOwnerUpdateForm(props: BusinessOwnerUpdateFormProps): React.ReactElement;
