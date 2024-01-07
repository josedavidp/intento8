import { useDispatch, useSelector } from "react-redux"
import TitleCard from "./TitleCard"
import InputText from './ImputText'
import TextAreaInput from './TextAreaImput'

function CrearCurso(){


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

            <TitleCard title="Creación del nuevo curso" topMargin="mt-2">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Titulo" defaultValue="Titulo del nuevo curso"/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nombre del modulo" defaultValue="nuevo modulo"/>
                    <InputText labelTitle="Video" defaultValue="link de video de referencia"/>
                    <TextAreaInput labelTitle="Información" defaultValue="Informacion del modulo"/>
                </div>

                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nombre del modulo" defaultValue="nuevo modulo"/>
                    <InputText labelTitle="Video" defaultValue="link de video de referencia"/>
                    <TextAreaInput labelTitle="Información" defaultValue="Informacion del modulo"/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nombre del modulo" defaultValue="nuevo modulo"/>
                    <InputText labelTitle="Video" defaultValue="link de video de referencia"/>

                    <TextAreaInput labelTitle="Información" defaultValue="Informacion del modulo"/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nombre del modulo" defaultValue="nuevo modulo"/>
                    <InputText labelTitle="Video" defaultValue="link de video de referencia"/>

                    <TextAreaInput labelTitle="Información" defaultValue="Informacion del modulo"/>
                </div>
                <div className="divider" ></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Nombre del modulo" defaultValue="nuevo modulo"/>
                    <InputText labelTitle="Video" defaultValue="link de video de referencia"/>
                    <TextAreaInput labelTitle="Información" defaultValue="Informacion del modulo"/>
                </div>


                <div className="mt-16"><button className="btn btn-primary float-right bg-yellow border-yellow text-blue">Crear nuevo Modulo</button></div>

                <div className="mt-16"><button className="btn btn-primary float-right bg-yellow border-yellow text-blue">Crear nuevo curso</button></div>
            </TitleCard>
        </>
    )
}


export default CrearCurso;