import { useDispatch, useSelector } from "react-redux"
import TitleCard from "./TitleCard"
import InputText from './ImputText'
import TextAreaInput from './TextAreaImput'
import{useState} from 'react'

function CrearCurso(){
    const [courseData, setCourseData] = useState({
        image: 'https://significado.net/wp-content/uploads/2015/05/Econom%C3%ADa.jpg',
        icon: 'src/images/EconomiaBasicaIcono.png',
        title: 'Economía Básica 1',
        description: 'Un curso de economía básica te introduce a conceptos fundamentales como oferta, demanda, precios, mercados y cómo funcionan los sistemas económicos. Ayuda a comprender cómo se toman decisiones en la producción, distribución y consumo de bienes y servicios.',
        content: 'El contenido del curso incluye...',
        registrationURL: 'https://example.com/registro-economia-basica',
        modulo1: {
          video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/nFYP0BI8j1o?si=rEC8YlSfw4gbyJgC' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
          titulo: 'INTRODUCCIÓN ¿QUÉ ES EL RUC?',
          informacion_extra: 'El RUC es el Registro Único de Contribuyentes. Es un número de identificación fiscal utilizado en varios países de habla hispana, incluyendo Ecuador, para identificar a las personas y empresas que están registradas para pagar impuestos.'
        },
        modulo2: {
          video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/MR39GHa-YWQ?si=3lIrU30SKaC5UtEg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
          titulo: 'REQUISITOS PARA ABRIR EL RUC EN LÍNEA',
          informacion_extra: 'En Ecuador, para abrir el RUC en línea, puedes seguir estos pasos: Accede al sitio web del Servicio de Rentas Internas (SRI) de Ecuador: https://www.sri.gob.ec/ Busca la opción de \'Registro de RUC\' o \'Obtención de RUC\' en la página principal del SRI. Deberás crear una cuenta o iniciar sesión en el portal en línea del SRI. Luego, sigue las instrucciones para completar el formulario de registro del RUC, proporcionando la información requerida sobre tu situación fiscal, personal o empresarial. Recuerda tener a la mano la documentación necesaria, como tu cédula de identidad, comprobante de domicilio, entre otros, dependiendo del tipo de contribuyente que seas (persona natural o jurídica). Siempre es recomendable revisar los requisitos específicos en el sitio web del SRI para asegurarte de cumplir con todos los pasos correctamente.'
        },
        modulo3: {
          video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/vt7YBwcrIME?si=47R-GcXfhDgGhiR9' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
          titulo: '¿CÓMO ABRIR EL RUC EN LÍNEA SI SOY UNA PERSONA NATURAL?',
          informacion_extra: 'Para abrir el RUC en línea siendo una persona natural en Ecuador, puedes seguir estos pasos: Accede al sitio web del Servicio de Rentas Internas (SRI) de Ecuador: Visita https://www.sri.gob.ec/ Registro en línea: Busca la opción de \'Registro RUC\' o \'Obtención de RUC\' en la página principal del SRI. Crear una cuenta o iniciar sesión: Si no tienes una cuenta en el portal del SRI, es probable que necesites crear una. Si ya tienes una cuenta, inicia sesión con tus credenciales. Rellenar el formulario: Completa el formulario de registro proporcionando la información personal requerida, como tu cédula de identidad, datos personales, dirección, entre otros. Verificación de información: Revisa detenidamente toda la información proporcionada para asegurarte de que esté correcta antes de enviarla. Envío de la solicitud: Una vez que hayas completado el formulario, envía la solicitud. Esperar confirmación: Después de enviar la solicitud, es probable que debas esperar un tiempo para recibir la confirmación y el número de RUC asignado. Recuerda tener a mano todos los documentos necesarios, como tu cédula de identidad, comprobante de domicilio, entre otros, para completar el proceso de registro de manera correcta. Es esencial verificar los requisitos específicos y cualquier otra información adicional en el sitio web oficial del Servicio de Rentas Internas (SRI) de Ecuador, ya que los procedimientos pueden cambiar ocasionalmente.'
        }
      });
      
    
      const onInputChange = ({ target }) => {
        setCourseData({
          ...courseData,
          [target.name]: target.value,
        });
      };
    
      const onModuleInputChange = (moduleNumber, fieldName, value) => {
        setCourseData({
          ...courseData,
          [`modulo${moduleNumber}`]: {
            ...courseData[`modulo${moduleNumber}`],
            [fieldName]: value,
          },
        });
      };
    
      const createCourse = async () => {
        try {
          
          const response = await fetch('http://192.168.0.114:4001/api/events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseData),
          });
    
          if (response.ok) {
            
            alert('Curso creado con éxito');
          } else {
            
            console.error('Error al crear el curso:', response.statusText);
          }
        } catch (error) {
          
          console.error('Error al crear el curso:', error.message);
        }
      };
    
      return (
        <>
          <TitleCard title="Creación del nuevo curso" topMargin="mt-2">
           
            <InputText
              labelTitle="Título del Curso"
              defaultValue={courseData.title}
              name="title"
              onChange={onInputChange}
            />
              <InputText
              labelTitle="Url de la imagen"
              defaultValue={courseData.image}
              name="image"
              onChange={onInputChange}
            />

            <InputText
              labelTitle="Descripción del Curso"
              defaultValue={courseData.description}
              name="description"
              onChange={onInputChange}
            />
            <InputText
              labelTitle="Contenido del Curso"
              defaultValue={courseData.content}
              name="content"
              onChange={onInputChange}
            />
            <InputText
              labelTitle="URL de Registro"
              defaultValue={courseData.registrationURL}
              name="registrationURL"
              onChange={onInputChange}
            />
    
            {/* Módulo 1 */}
            <InputText
              labelTitle="Título del Módulo 1"
              defaultValue={courseData.modulo1.titulo}
              onChange={(e) => onModuleInputChange(1, 'titulo', e.target.value)}
            />
            <InputText
              labelTitle="Video del Módulo 1"
              defaultValue={courseData.modulo1.video}
              onChange={(e) => onModuleInputChange(1, 'video', e.target.value)}
            />
            <TextAreaInput
              labelTitle="Información Extra del Módulo 1"
              defaultValue={courseData.modulo1.informacion_extra}
              onChange={(e) => onModuleInputChange(1, 'informacion_extra', e.target.value)}
            />

            {/* Módulo 2 */}
                <InputText
                labelTitle="Título del Módulo 2"
                defaultValue={courseData.modulo2.titulo}
                onChange={(e) => onModuleInputChange(2, 'titulo', e.target.value)}
                />
                <InputText
                labelTitle="Video del Módulo 2"
                defaultValue={courseData.modulo2.video}
                onChange={(e) => onModuleInputChange(2, 'video', e.target.value)}
                />
                <TextAreaInput
                labelTitle="Información Extra del Módulo 2"
                defaultValue={courseData.modulo2.informacion_extra}
                onChange={(e) => onModuleInputChange(2, 'informacion_extra', e.target.value)}
                />

                {/* Módulo 3 */}
                <InputText
                labelTitle="Título del Módulo 3"
                defaultValue={courseData.modulo3.titulo}
                onChange={(e) => onModuleInputChange(3, 'titulo', e.target.value)}
                />
                <InputText
                labelTitle="Video del Módulo 3"
                defaultValue={courseData.modulo3.video}
                onChange={(e) => onModuleInputChange(3, 'video', e.target.value)}
                />
                <TextAreaInput
                labelTitle="Información Extra del Módulo 3"
                defaultValue={courseData.modulo3.informacion_extra}
                onChange={(e) => onModuleInputChange(3, 'informacion_extra', e.target.value)}
                />

    
            {/* Módulo 2 */}
           
    
            <div className="mt-16">
              <button
                className="btn btn-primary float-right bg-yellow border-yellow text-blue"
                onClick={createCourse}
              >
                Crear nuevo curso
              </button>
            </div>
          </TitleCard>
        </>
      );
}


export default CrearCurso;