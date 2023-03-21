/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { BusinessCategory } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BusinessCategoryCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    categoryName: "",
    categoryDescription: "",
  };
  const [categoryName, setCategoryName] = React.useState(
    initialValues.categoryName
  );
  const [categoryDescription, setCategoryDescription] = React.useState(
    initialValues.categoryDescription
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCategoryName(initialValues.categoryName);
    setCategoryDescription(initialValues.categoryDescription);
    setErrors({});
  };
  const validations = {
    categoryName: [{ type: "Required" }],
    categoryDescription: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          categoryName,
          categoryDescription,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new BusinessCategory(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessCategoryCreateForm")}
      {...rest}
    >
      <TextField
        label="Category name"
        isRequired={true}
        isReadOnly={false}
        value={categoryName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              categoryName: value,
              categoryDescription,
            };
            const result = onChange(modelFields);
            value = result?.categoryName ?? value;
          }
          if (errors.categoryName?.hasError) {
            runValidationTasks("categoryName", value);
          }
          setCategoryName(value);
        }}
        onBlur={() => runValidationTasks("categoryName", categoryName)}
        errorMessage={errors.categoryName?.errorMessage}
        hasError={errors.categoryName?.hasError}
        {...getOverrideProps(overrides, "categoryName")}
      ></TextField>
      <TextField
        label="Category description"
        isRequired={true}
        isReadOnly={false}
        value={categoryDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              categoryName,
              categoryDescription: value,
            };
            const result = onChange(modelFields);
            value = result?.categoryDescription ?? value;
          }
          if (errors.categoryDescription?.hasError) {
            runValidationTasks("categoryDescription", value);
          }
          setCategoryDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("categoryDescription", categoryDescription)
        }
        errorMessage={errors.categoryDescription?.errorMessage}
        hasError={errors.categoryDescription?.hasError}
        {...getOverrideProps(overrides, "categoryDescription")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
