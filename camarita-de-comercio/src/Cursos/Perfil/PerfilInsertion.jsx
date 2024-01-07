import { useDispatch, useSelector } from "react-redux"
import TitleCard from "./TitleCard"
import InputText from './ImputText'
import TextAreaInput from './TextAreaImput'

function ProfileSettings(){


    // const dispatch = useDispatch()

    // // Call API to update profile settings changes
    // const updateProfile = () => {
    //     dispatch(showNotification({message : "Perfil Actualizado", status : 1}))
    // }

    // const updateFormValue = ({updateType, value}) => {
    //     console.log(updateType)
    // }

    return(
        <>

            <TitleCard title="Ajustes de Perfil" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nombre" defaultValue="Kylian Carrión"/>
                    <InputText labelTitle="Email Id" defaultValue="Kilian7@hotmail.com"/>
                    <InputText labelTitle="Ocupación" defaultValue="Estudiante"/>
                    <InputText labelTitle="Residencia" defaultValue="Loja - Ecuador"/>
                    <TextAreaInput labelTitle="Acerca de mi" defaultValue="Goleador del CITY, eterno padre de Vinicius"/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Idioma" defaultValue="Español"/>
                    <InputText labelTitle="Zona horaria" defaultValue="Guayakill"/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right bg-yellow border-yellow text-blue">Actualizar</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings