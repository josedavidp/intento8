import TitleCard from "./TitleCard";
import InputText from "./ImputText";
import TextAreaInput from "./TextAreaImput";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProfileSettings({
  userId,
  nameId,
  emailId,
  ageId,
  nacionalidadId,
  ocupacionId,
  residenciaId,
}) {
  const [userData, setUserData] = useState({
    nombre: nameId,
    edad: ageId,
    nacionalidad: nacionalidadId,
    ocupacion: ocupacionId,
    residencia: residenciaId,
  });

  const onInputChange = (field, value) => {
    const sanitizedValue = typeof value === "object" ? value.value : value;

    setUserData((prevData) => ({
      ...prevData,
      [field]: sanitizedValue,
    }));
  };

  const handleActualizarUsuario = async () => {
    console.log(userId);
    try {
      const response = await fetch(`http://localhost:4001/api/auth/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuario actualizado con éxito:", data);
        alert(
          "Perfil Actualizado Con Exito,Se mostraran los cambios cuando vuelvas iniciar sesion"
        );
      } else {
        console.error("Error al actualizar el usuario:", response.statusText);
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error.message);
    }
  };

  return (
    <>
      <TitleCard title="Ajustes de Perfil" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Nombre"
            defaultValue={nameId}
            updateFormValue={(value) => onInputChange("nombre", value)}
          />
          <InputText labelTitle="Email" defaultValue={emailId} disabled />
          <InputText
            labelTitle="Edad"
            defaultValue={ageId !== undefined ? ageId + " Años" : "Vacio"}
            updateFormValue={(value) => onInputChange("edad", value)}
          />
          <InputText
            labelTitle="Nacionalidad"
            defaultValue={
              nacionalidadId !== undefined ? nacionalidadId : "Vacio"
            }
            updateFormValue={(value) => onInputChange("nacionalidad", value)}
          />
          <InputText
            labelTitle="Ocupación"
            defaultValue={ocupacionId !== undefined ? ocupacionId : "Vacio"}
            updateFormValue={(value) => onInputChange("ocupacion", value)}
          />
          <InputText
            labelTitle="Residencia"
            defaultValue={residenciaId !== undefined ? residenciaId : "Vacio"}
            updateFormValue={(value) => onInputChange("residencia", value)}
          />
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText labelTitle="Idioma" defaultValue="Español" />
          <InputText
            labelTitle="Zona horaria"
            defaultValue="Zona horaria de Quito (GMT-5)"
          />
        </div>
        <div className="mt-16">
          <button
            className="btn btn-primary float-right bg-yellow border-yellow text-blue"
            onClick={handleActualizarUsuario}
          >
            Actualizar
          </button>
        </div>
        <Link to="/ingreso">
          <div className="mt-16">
            <button className="btn btn-primary float-right bg-yellow border-yellow text-blue">
              Cerrar Sesion
            </button>
          </div>
        </Link>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
