'use client'

import { useLanguage } from '@/context/LanguageContext'
import { IQueryMutationErrorResponse } from '@/interfaces/queryMutationErrorResponse'
import { useCreateBriefMutation } from '@/redux/features/brief/brief.api'
import { Form, Formik, type FormikHelpers } from 'formik'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { toast } from 'sonner'
import * as Yup from 'yup'
import FormErrorMessage from '../FormErrorMessage'
import {
  BUDGET_CUSTOM_VALUE,
  BUDGET_OPTIONS,
  INDUSTRY_OPTIONS,
  INDUSTRY_OTHER_VALUE,
  SERVICE_OPTIONS,
  briefFormInitialValues,
  toBriefPayload,
  type BriefFormValues,
} from './briefFormOptions'

export const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  service: Yup.string().required('Service is required'),
  industry: Yup.string().required('Industry is required'),
  customIndustry: Yup.string().when('industry', {
    is: INDUSTRY_OTHER_VALUE,
    then: (schema) => schema.trim().required('Please enter your industry'),
    otherwise: (schema) => schema.strip(),
  }),
  budget: Yup.string().required('Budget is required'),
  customBudget: Yup.string().when('budget', {
    is: BUDGET_CUSTOM_VALUE,
    then: (schema) => schema.trim().required('Please enter your budget'),
    otherwise: (schema) => schema.strip(),
  }),
  preferredStartDate: Yup.string().required('Preferred start date is required'),
  message: Yup.string().required('Message is required'),
})

type BriefInquiryFormProps = {
  variant?: 'page' | 'block'
}

const pageStyles = {
  input:
    'contact-form-input w-full bg-primary border border-border-primary/60 rounded-2xl py-4 px-6 text-sm text-primary placeholder:text-secondary/55 focus:outline-hidden focus:border-secondary transition-colors',
  select:
    'contact-form-input w-full bg-primary border border-border-primary/60 rounded-2xl py-4 px-6 text-sm text-primary placeholder:text-secondary/55 focus:outline-hidden focus:border-secondary transition-colors appearance-none cursor-pointer',
  date: 'contact-form-input w-full bg-primary border border-border-primary/60 rounded-2xl py-4 px-6 text-sm text-primary placeholder:text-secondary/55 focus:outline-hidden focus:border-secondary transition-colors cursor-pointer',
  textarea:
    'contact-form-input w-full bg-primary border border-border-primary/60 rounded-2xl py-5 px-6 text-sm text-primary placeholder:text-secondary/55 focus:outline-hidden focus:border-secondary transition-colors resize-none',
  option: '',
  label: 'text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase',
  fieldGap: 'space-y-2',
  customInputExtra: 'mt-3',
}

const blockStyles = {
  input:
    'border-invert/20 text-invert placeholder:text-invert/40 focus:border-invert w-full border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none',
  select:
    'border-invert/20 text-invert/60 focus:border-invert cursor-pointer appearance-none rounded-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none',
  date: 'border-invert/20 text-invert focus:border-invert w-full border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none',
  textarea:
    'border-invert/20 text-invert placeholder:text-invert/40 focus:border-invert w-full resize-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none',
  option: 'bg-invert text-invert',
  label: 'text-invert/60 text-[10px] font-medium tracking-widest uppercase',
  fieldGap: 'flex flex-col gap-2',
  customInputExtra: '',
}

export default function BriefInquiryForm({ variant = 'page' }: BriefInquiryFormProps) {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [createBrief, { isLoading }] = useCreateBriefMutation()
  const styles = variant === 'block' ? blockStyles : pageStyles
  const isBlock = variant === 'block'

  const handleSubmit = async (values: BriefFormValues, { resetForm }: FormikHelpers<BriefFormValues>) => {
    const res = await createBrief(toBriefPayload(values))
    const error = res.error as IQueryMutationErrorResponse | undefined

    if (error) {
      toast.error(error.data?.message || 'Something went wrong')
      return
    }

    toast.success(res.data?.message || 'Brief created successfully')
    resetForm()
    setIsSubmitted(true)
  }

  const successContent = isBlock ? (
    <div className="flex flex-col gap-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bca374]/20">
        <CheckCircle size={28} className="text-[#bca374]" />
      </div>
      <div>
        <h4 className="font-display text-invert mb-2 text-2xl font-light">{t('contact.form.success_title')}</h4>
        <p className="text-invert/60 max-w-sm text-sm leading-relaxed font-light">{t('contact.form.success_desc')}</p>
      </div>
      <button
        type="button"
        onClick={() => setIsSubmitted(false)}
        className="text-invert/70 border-invert/30 hover:text-invert hover:border-invert w-max border-b pb-0.5 font-mono text-[10px] tracking-widest uppercase transition-all"
      >
        Send another brief
      </button>
    </div>
  ) : (
    <div className="bg-secondary/15 border-border-primary flex flex-col items-center space-y-8 rounded-[2.5rem] border p-12 text-center md:p-20">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#bca374]/20">
        <CheckCircle size={48} className="text-[#bca374]" />
      </div>
      <div>
        <h2 className="font-display text-primary mb-4 text-3xl md:text-4xl">{t('contact.form.success_title')}</h2>
        <p className="text-secondary mx-auto max-w-md leading-relaxed font-light">{t('contact.form.success_desc')}</p>
      </div>
      <button
        type="button"
        onClick={() => setIsSubmitted(false)}
        className="text-secondary border-secondary/30 hover:text-primary hover:border-primary border-b pb-0.5 font-mono text-[10px] tracking-widest uppercase transition-all"
      >
        Send another brief
      </button>
    </div>
  )

  if (isSubmitted) {
    return successContent
  }

  const formBody = (
    <Formik
      initialValues={briefFormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidationSchema}
    >
      {({ values, handleChange, setFieldValue, errors, touched }) => (
        <Form className={isBlock ? 'flex flex-col gap-8 sm:gap-10' : 'space-y-8'}>
          <div
            className={
              isBlock ? 'grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10' : 'grid grid-cols-1 gap-8 md:grid-cols-2'
            }
          >
            <div className={styles.fieldGap}>
              <label className={styles.label}>{t('contact.form.name')}</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className={styles.input}
                placeholder={isBlock ? 'Your name' : 'Ex: Alexander Hamilton'}
              />
              {errors.name && touched.name && <FormErrorMessage message={errors.name} />}
            </div>
            <div className={styles.fieldGap}>
              <label className={styles.label}>{t('contact.form.email')}</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={styles.input}
                placeholder={isBlock ? 'Email address' : 'hamilton@studio.com'}
              />
              {errors.email && touched.email && <FormErrorMessage message={errors.email} />}
            </div>
          </div>

          <div
            className={
              isBlock ? 'grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10' : 'grid grid-cols-1 gap-8 md:grid-cols-2'
            }
          >
            <div className={styles.fieldGap}>
              <label className={styles.label}>{t('contact.form.service')}</label>
              <select name="service" value={values.service} onChange={handleChange} className={styles.select}>
                <option value="">Select Service</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className={styles.option}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service && touched.service && <FormErrorMessage message={errors.service} />}
            </div>
            <div className={styles.fieldGap}>
              <label className={styles.label}>{t('contact.form.industry')}</label>
              <select
                name="industry"
                value={values.industry}
                onChange={(e) => {
                  handleChange(e)
                  if (e.target.value !== INDUSTRY_OTHER_VALUE) {
                    setFieldValue('customIndustry', '')
                  }
                }}
                className={styles.select}
              >
                <option value="">Select Industry</option>
                {INDUSTRY_OPTIONS.map((industry) => (
                  <option key={industry} value={industry} className={styles.option}>
                    {industry}
                  </option>
                ))}
                <option value={INDUSTRY_OTHER_VALUE} className={styles.option}>
                  {INDUSTRY_OTHER_VALUE}
                </option>
              </select>
              {errors.industry && touched.industry && <FormErrorMessage message={errors.industry} />}
              {values.industry === INDUSTRY_OTHER_VALUE && (
                <input
                  type="text"
                  name="customIndustry"
                  value={values.customIndustry}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.customInputExtra}`}
                  placeholder="Enter your industry"
                />
              )}
              {errors.customIndustry && touched.customIndustry && <FormErrorMessage message={errors.customIndustry} />}
            </div>
          </div>

          <div
            className={
              isBlock ? 'grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10' : 'grid grid-cols-1 gap-8 md:grid-cols-2'
            }
          >
            <div className={styles.fieldGap}>
              <label className={styles.label}>{t('contact.form.budget')}</label>
              <select
                name="budget"
                value={values.budget}
                onChange={(e) => {
                  handleChange(e)
                  if (e.target.value !== BUDGET_CUSTOM_VALUE) {
                    setFieldValue('customBudget', '')
                  }
                }}
                className={styles.select}
              >
                <option value="">Select Budget</option>
                {BUDGET_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className={styles.option}>
                    {option.label}
                  </option>
                ))}
                <option value={BUDGET_CUSTOM_VALUE} className={styles.option}>
                  Custom price
                </option>
              </select>
              {errors.budget && touched.budget && <FormErrorMessage message={errors.budget} />}
              {values.budget === BUDGET_CUSTOM_VALUE && (
                <input
                  type="text"
                  name="customBudget"
                  value={values.customBudget}
                  onChange={handleChange}
                  className={`${styles.input} ${styles.customInputExtra}`}
                  placeholder="Enter your budget (e.g. $3,500)"
                />
              )}
              {errors.customBudget && touched.customBudget && <FormErrorMessage message={errors.customBudget} />}
            </div>
            <div className={styles.fieldGap}>
              <label className={styles.label}>{t('contact.form.date')}</label>
              <input
                type="date"
                name="preferredStartDate"
                value={values.preferredStartDate}
                onChange={handleChange}
                className={styles.date}
              />
              {errors.preferredStartDate && touched.preferredStartDate && (
                <FormErrorMessage message={errors.preferredStartDate} />
              )}
            </div>
          </div>

          <div className={styles.fieldGap}>
            <label className={styles.label}>{t('contact.form.message')}</label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              rows={isBlock ? 3 : 5}
              className={styles.textarea}
              placeholder="Tell us about the core objectives..."
            />
            {errors.message && touched.message && <FormErrorMessage message={errors.message} />}
          </div>

          {isBlock ? (
            <button
              type="submit"
              disabled={isLoading}
              className="group bg-primary text-primary border-primary relative mt-4 overflow-hidden rounded-full border px-10 py-5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 sm:mt-8 sm:px-12 sm:py-6 md:max-w-xs"
            >
              <span className="group-hover:text-invert relative z-10 flex items-center justify-center gap-2 transition-colors duration-500">
                {isLoading ? (
                  <>
                    Sending
                    <Loader size={14} className="animate-spin" />
                  </>
                ) : (
                  'Send Inquiry'
                )}
              </span>
              <div className="bg-invert absolute inset-0 z-0 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0"></div>
            </button>
          ) : (
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="bg-invert text-invert font-display group flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-xs font-medium tracking-widest uppercase disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    {t('contact.form.submitting')}
                    <Loader size={16} className="animate-spin" />
                  </span>
                ) : (
                  <>
                    {t('contact.form.submit')}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" />
                  </>
                )}
              </motion.button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  )

  if (isBlock) {
    return formBody
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="contact-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-secondary/15 border-border-primary rounded-[2.5rem] border p-8 md:p-12"
      >
        {formBody}
      </motion.div>
    </AnimatePresence>
  )
}
