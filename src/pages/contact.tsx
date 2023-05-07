import styles from '../styles/Contact.module.css'
import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form'
import { CONTACT_US, EMAIL, MESSAGE, MOBILE_NUMBER, NAME, SEND, THIS_FIELD_IS_REQUIRED } from '../constants/strings';
import ThickStrip from '../components/ThickStrip';


export default function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div id={styles.container}>
      <Navbar />
      <ThickStrip pageTitle={CONTACT_US} />
      <form id={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div id={styles.formUpperRow}>
          <input {...register("required", { required: true })} placeholder={NAME} />
          {errors.required && <div>{THIS_FIELD_IS_REQUIRED}</div>}

          <input {...register("required", { required: true })} placeholder={EMAIL} />
          {errors.required && <div>{THIS_FIELD_IS_REQUIRED}</div>}

          <input {...register("required", { required: true })} placeholder={MOBILE_NUMBER} />
          {errors.required && <div>{THIS_FIELD_IS_REQUIRED}</div>}
        </div>

        <textarea rows={4} cols={50} id={styles.messageInput} {...register("required", { required: true })} placeholder={MESSAGE} />
        {errors.required && <div>{THIS_FIELD_IS_REQUIRED}</div>}

        <input type="submit" value={SEND} />
      </form>
    </div>
  )
}
