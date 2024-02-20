import { FormInput, SubmitBtn } from '../components'
import { Form, Link } from 'react-router-dom'

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h1 className='text-center text-3xl font-bold'>Register</h1>
        <FormInput label='username' name='username' type='text' />
        <FormInput label='email' name='email' type='email' />
        <FormInput label='password' name='password' type='password' />
        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>
        <p className='text-center'>
          Already a member? <Link to='/login'>Login</Link>
        </p>
      </Form>
    </section>
  )
}

export default Register
