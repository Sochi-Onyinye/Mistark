/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BusinessCategory } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BusinessCategoryUpdateFormInputValues = {
    categoryName?: string;
    categoryDescription?: string;
};
export declare type BusinessCategoryUpdateFormValidationValues = {
    categoryName?: ValidationFunction<string>;
    categoryDescription?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessCategoryUpdateFormOverridesProps = {
    BusinessCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    categoryName?: PrimitiveOverrideProps<TextFieldProps>;
    categoryDescription?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BusinessCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessCategory?: BusinessCategory;
    onSubmit?: (fields: BusinessCategoryUpdateFormInputValues) => BusinessCategoryUpdateFormInputValues;
    onSuccess?: (fields: BusinessCategoryUpdateFormInputValues) => void;
    onError?: (fields: BusinessCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessCategoryUpdateFormInputValues) => BusinessCategoryUpdateFormInputValues;
    onValidate?: BusinessCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessCategoryUpdateForm(props: BusinessCategoryUpdateFormProps): React.ReactElement;
