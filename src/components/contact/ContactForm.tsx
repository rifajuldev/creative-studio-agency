'use client'

import { IQueryMutationErrorResponse } from '@/interfaces/queryMutationErrorResponse'
import { useCreateBriefMutation } from '@/redux/features/brief/brief.api'
import { Form, Formik, type FormikHelpers } from 'formik'
import { ArrowRight, CheckCircle, Loader } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { toast } from 'sonner'
import * as Yup from 'yup'
import { useLanguage } from '../../context/LanguageContext'
import FormErrorMessage from '../FormErrorMessage'

export const briefFormInitialValues = {
  name: '',
  email: '',
  service: '',
  industry: '',
  budget: '',
  preferredStartDate: '',
  message: '',
}

export const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  service: Yup.string().required('Service is required'),
  industry: Yup.string().required('Industry is required'),
  budget: Yup.string().required('Budget is required'),
  preferredStartDate: Yup.string().required('Preferred start date is required'),
  message: Yup.string().required('Message is required'),
})

const inputClassName =
  'contact-form-input w-full bg-primary border border-border-primary/60 rounded-2xl py-4 px-6 text-sm text-primary placeholder:text-secondary/55 focus:outline-hidden focus:border-secondary transition-colors'

const selectClassName = `${inputClassName} appearance-none cursor-pointer`

const dateInputClassName = `${inputClassName} cursor-pointer`

export default function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [createBrief, { isLoading }] = useCreateBriefMutation()

  const handleSubmit = async (
    values: typeof briefFormInitialValues,
    { resetForm }: FormikHelpers<typeof briefFormInitialValues>
  ) => {
    const res = await createBrief(values)
    const error = res.error as IQueryMutationErrorResponse

    if (error) {
      toast.error(error.data.message || 'Something went wrong')
      return
    }

    toast.success(res.data.message)
    resetForm()
  }

  return (
    <AnimatePresence mode="wait">
      {!isSubmitted ? (
        <motion.div
          key="contact-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-secondary/15 border-border-primary rounded-[2.5rem] border p-8 md:p-12"
        >
          <Formik
            initialValues={briefFormInitialValues}
            onSubmit={handleSubmit}
            validationSchema={contactFormValidationSchema}
          >
            {({ values, handleChange, errors, touched }) => {
              return (
                <Form className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        className={inputClassName}
                        placeholder="Ex: Alexander Hamilton"
                      />
                      {errors.name && touched.name && <FormErrorMessage message={errors.name} />}
                    </div>
                    <div className="space-y-2">
                      <label className="text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className={inputClassName}
                        placeholder="hamilton@studio.com"
                      />
                      {errors.email && touched.email && <FormErrorMessage message={errors.email} />}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase">
                        {t('contact.form.service')}
                      </label>
                      <select name="service" value={values.service} onChange={handleChange} className={selectClassName}>
                        <option value="">Select a Category</option>
                        <option value="animation">2D Animation</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="webdev">Web Development</option>
                        <option value="appdev">App Development</option>
                        <option value="ai">AI & Integrations</option>
                      </select>
                      {errors.service && touched.service && <FormErrorMessage message={errors.service} />}
                    </div>
                    <div className="space-y-2">
                      <label className="text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase">
                        {t('contact.form.industry')}
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={values.industry}
                        onChange={handleChange}
                        className={inputClassName}
                        placeholder="Ex: Fintech / Luxury / B2B SaaS"
                      />
                      {errors.industry && touched.industry && <FormErrorMessage message={errors.industry} />}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase">
                        {t('contact.form.budget')}
                      </label>
                      <select name="budget" value={values.budget} onChange={handleChange} className={selectClassName}>
                        <option value="">Select Range</option>
                        <option value="small">$5k - $10k</option>
                        <option value="medium">$10k - $25k</option>
                        <option value="large">$25k - $50k</option>
                        <option value="enterprise">$50k+</option>
                      </select>
                      {errors.budget && touched.budget && <FormErrorMessage message={errors.budget} />}
                    </div>
                    <div className="space-y-2">
                      <label className="text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase">
                        {t('contact.form.date')}
                      </label>
                      <input
                        type="date"
                        name="preferredStartDate"
                        value={values.preferredStartDate}
                        onChange={handleChange}
                        className={dateInputClassName}
                      />
                      {errors.preferredStartDate && touched.preferredStartDate && (
                        <FormErrorMessage message={errors.preferredStartDate} />
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-secondary ml-1 text-[10px] font-bold tracking-widest uppercase">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClassName} resize-none py-5`}
                      placeholder="Tell us about the core objectives..."
                    />
                    {errors.message && touched.message && <FormErrorMessage message={errors.message} />}
                  </div>

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
                </Form>
              )
            }}
          </Formik>
        </motion.div>
      ) : (
        <motion.div
          key="success-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-secondary/15 border-border-primary flex flex-col items-center space-y-8 rounded-[2.5rem] border p-12 text-center md:p-20"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#bca374]/20">
            <CheckCircle size={48} className="text-[#bca374]" />
          </div>
          <div>
            <h2 className="font-display text-primary mb-4 text-3xl md:text-4xl">{t('contact.form.success_title')}</h2>
            <p className="text-secondary mx-auto max-w-md leading-relaxed font-light">
              {t('contact.form.success_desc')}
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-secondary border-secondary/30 hover:text-primary hover:border-primary border-b pb-0.5 font-mono text-[10px] tracking-widest uppercase transition-all"
          >
            Send another brief
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
