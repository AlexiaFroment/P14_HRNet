import { Formik, Form, Field, FieldProps, FormikHelpers } from "formik"
import * as Yup from "yup"
import { Input } from "antd"
import { Dayjs } from "dayjs"
import { DatePickerComponent } from "@/components/DatePickerComponent"
import { ButtonComponent } from "@/components/ButtonComponent"
import { DropdownComponent } from "@/components/DropdownComponent"
import state from "@/data/states.json"

interface EmployeeFormValues {
  firstname: string
  lastname: string
  dateOfBirth: Dayjs | null
  dateOfStart: Dayjs | null
  street: string
  city: string
  state: string[]
  zipcode: string
  department: string[]
}

export const EmployeeForm = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    dateOfBirth: Yup.date().nullable().required("Date of birth is required"),
    dateOfStart: Yup.date()
      .nullable()
      .required("Date of your entry is required"),
    street: Yup.string().required("Your street is required"),
    city: Yup.string().required("Your city is required"),
    state: Yup.string().required("Your state is required"),
    zipcode: Yup.string()
      .matches(/^\d{5}$/, "Zipcode must be exactly 5 digits")
      .required("Your zipcode is required"),
    department: Yup.string().required("Your department is required"),
  })
  const handleSubmit = (
    values: EmployeeFormValues,
    { setSubmitting }: FormikHelpers<EmployeeFormValues>
  ) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        dateOfBirth: null as Dayjs | null,
        dateOfStart: null as Dayjs | null,
        street: "",
        city: "",
        state: [] as string[],
        zipcode: "",
        department: [] as string[],
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ setFieldValue, errors, touched }) => (
        <Form>
          {/* First Name */}
          <div className='mb-2'>
            <label htmlFor='firstname' className='block mb-1 text-xs'>
              First Name
            </label>
            <Field name='firstname'>
              {({ field }: FieldProps) => <Input size='small' {...field} />}
            </Field>
            {errors.firstname && touched.firstname && (
              <div className='text-red-500'>{errors.firstname}</div>
            )}
          </div>
          {/* Last Name */}
          <div className='mb-2'>
            <label htmlFor='lastname' className='block mb-1 text-xs'>
              Last Name
            </label>
            <Field name='lastname'>
              {({ field }: FieldProps) => <Input size='small' {...field} />}
            </Field>
            {errors.lastname && touched.lastname && (
              <div className='text-red-500'>{errors.lastname}</div>
            )}
          </div>
          {/* Date of birth */}
          <div className='mb-2'>
            <label htmlFor='dateOfBirth' className='block mb-1 text-xs '>
              Date of Birth
            </label>
            <Field name='dateOfBirth'>
              {({ field }: FieldProps) => (
                <DatePickerComponent
                  value={field.value ? field.value.format("DD/MM/YYYY") : null}
                  onChange={(date) => setFieldValue("dateOfBirth", date)}
                />
              )}
            </Field>
            {errors.dateOfBirth && touched.dateOfBirth && (
              <div className='text-red-500'>{errors.dateOfBirth}</div>
            )}
          </div>
          {/* Date of entry */}
          <div className='mb-4'>
            <label htmlFor='dateOfStart' className='block mb-1 text-xs '>
              Start Date
            </label>
            <Field name='dateOfStart'>
              {({ field }: FieldProps) => (
                <DatePickerComponent
                  value={field.value ? field.value.format("DD/MM/YYYY") : null}
                  onChange={(date) => setFieldValue("dateOfStart", date)}
                />
              )}
            </Field>
            {errors.dateOfStart && touched.dateOfStart && (
              <div className='text-red-500'>{errors.dateOfStart}</div>
            )}
          </div>

          <div className='relative mb-2 border-1 border-gray-400 '>
            <div className='absolute top-[-10px] left-2 bg-gray-100 px-2 text-xs'>
              Address
            </div>
            {/* Street */}
            <div className='mb-2 px-4 pt-4'>
              <label htmlFor='street' className='block mb-1 text-xs'>
                Street
              </label>
              <Field name='street'>
                {({ field }: FieldProps) => <Input size='small' {...field} />}
              </Field>
              {errors.street && touched.street && (
                <div className='text-red-500'>{errors.street}</div>
              )}
            </div>
            {/*city */}
            <div className='mb-2 px-4'>
              <label htmlFor='city' className='block mb-1 text-xs'>
                City
              </label>
              <Field name='city'>
                {({ field }: FieldProps) => <Input size='small' {...field} />}
              </Field>
              {errors.city && touched.city && (
                <div className='text-red-500'>{errors.city}</div>
              )}
            </div>
            {/*state */}
            <div className='mb-2 px-4'>
              <label htmlFor='state' className='block mb-1 text-xs '>
                State
              </label>
              <Field name='state'>
                {({ field }: FieldProps) => (
                  <DropdownComponent
                    value={field.value}
                    onChange={(value) => setFieldValue("state", value)}
                    items={state.map((state, index) => ({
                      label: state,
                      key: index.toString(),
                    }))}
                    placeholder={state[0]}
                  />
                )}
              </Field>
              {errors.department && touched.department && (
                <div className='text-red-500'>{errors.department}</div>
              )}
            </div>
            {/*zipcode */}
            <div className='mb-2 px-4'>
              <label htmlFor='zipcode' className='block mb-1 text-xs'>
                Zip Code
              </label>
              <Field name='zipcode'>
                {({ field }: FieldProps) => (
                  <Input
                    size='small'
                    {...field}
                    type='text'
                    inputMode='numeric'
                    pattern='[0-9]*'
                    maxLength={5}
                  />
                )}
              </Field>
              {errors.zipcode && touched.zipcode && (
                <div className='text-red-500'>{errors.zipcode}</div>
              )}
            </div>
          </div>

          {/* Department */}
          <div className='mb-4'>
            <label htmlFor='department' className='block mb-1 text-xs '>
              Department
            </label>
            <Field name='department'>
              {({ field }: FieldProps) => (
                <DropdownComponent
                  value={field.value}
                  onChange={(value) => setFieldValue("department", value)}
                  items={[
                    { label: "HR", key: "HR" },
                    { label: "Engineering", key: "Engineering" },
                    { label: "Marketing", key: "Marketing" },
                  ]}
                  placeholder='Select a department'
                />
              )}
            </Field>
            {errors.department && touched.department && (
              <div className='text-red-500'>{errors.department}</div>
            )}
          </div>

          <div className='flex justify-center py-4'>
            <ButtonComponent text='Save' />
          </div>
        </Form>
      )}
    </Formik>
  )
}
