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
                    <InputText labelTitle="Name" defaultValue="Kylian Carrión"/>
                    <InputText labelTitle="Email Id" defaultValue="Kilian7@hotmail.com"/>
                    <InputText labelTitle="Title" defaultValue="Estudiante"/>
                    <InputText labelTitle="Place" defaultValue="Loja - Ecuador"/>
                    <TextAreaInput labelTitle="About" defaultValue="Goleador del CITY, eterno padre de Vinicius"/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue="Español"/>
                    <InputText labelTitle="Timezone" defaultValue="East"/>
                </div>

                <div className="mt-16"><button className="btn btn-primary float-right">Actualizar</button></div>
            </TitleCard>
        </>
    )
}


export default ProfileSettings