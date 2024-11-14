import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {  Link } from '@tanstack/react-router'


const LoginForm = () =>{
    return(
    <div className="h-screen flex items-center justify-center">
      <div className=" w-1/6 justify-center items-center">
        <div className="">
          <h1 className="text-3xl font-bold mb-8 text-primary">Login </h1>     
          <div className="mb-4">
            <Label className="block text-gray-700 mb-2">Email</Label>
            <Input  />
          </div>   

          <div className="mb-4 ">
            <div className='flex justify-center items-center mb-2'>
              <Label className=" text-gray-700 ">
                 Password 
              </Label> 
              <Button variant="link" className='text-black ml-auto p-1 h-auto italic' >
                <Link href="/forgot-password" className="text-black-600 p-0">
                  forgot password ?
                </Link>
              </Button>
            </div>
            <Input type="password"/>
          </div>

          
          <Button className="w-full text-primary-foreground mt-4">Login</Button>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            New around here? 
            <Button variant="link" className='text-black'>
              <Link to='/register' className="text-black-600 italic">
                  Sign up
              </Link>
            </Button>
            
          </p>
        </div>
      </div>
    </div>
    )
}

export default LoginForm