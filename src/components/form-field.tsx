import { TextField, TextFieldProps } from '@mui/material'
import { Field, FieldConfig, FieldProps } from 'formik'

type FormFieldProps = TextFieldProps & FieldConfig

export default function FormField(props: FormFieldProps) {
  return (
    <Field {...props}>
      {({ field, meta }: FieldProps) => (
        <TextField
          {...field}
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
          {...props}
        />
      )}
    </Field>
  )
}
