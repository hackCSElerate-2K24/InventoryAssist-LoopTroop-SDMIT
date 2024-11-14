import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRef, useState } from 'react'

const RegisterPage = () => {
    const fullnameRef = useRef(null);
    const [fullnameValue,SetFullnameValue] = useState("") 
    return (
        <form>
            <div className='grid gap-4 w-80'>
                <div className="">
                    <Label className="block text-gray-700 mb-2">Full Name</Label>
                    <Input value={fullnameValue} onChange={(e)=>{SetFullnameValue(e.target.value)}}/>
                </div>

                <div className="">
                    <Label className="block text-gray-700 mb-2">Email</Label>
                    <Input type='email' />
                </div>


                <div className="">
                    <Label className="block text-gray-700 mb-2">Password</Label>
                    <Input type="password" />
                </div>


                <div className="">
                    <Label className="block text-gray-700 mb-2">Confirm Password</Label>
                    <Input type="password" />
                </div>

                <Button className="mt-4" 
                    onClick={(e)=>{e.preventDefault(); console.log(fullnameValue)}}
                >Register</Button>
            </div>
        </form>


    )
}

export default RegisterPage