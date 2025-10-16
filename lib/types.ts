// Form data interfaces for contact form

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Union type for all form data
export type FormData = ContactFormData;

// Form types enum
export enum FormType {
  CONTACT = "contact"
}

// API request/response types
export interface FormSubmissionRequest {
  formType: FormType;
  data: FormData;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
}
