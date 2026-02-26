export const NewsletterForm = () => {
  return (
    <form
      name="Suscríbete"
      aria-label="Suscríbete"
      className="box-border caret-transparent"
    >
      <input
        type="hidden"
        name="post_id"
        value="253"
        className="text-black bg-transparent box-border caret-transparent hidden p-[11px]"
      />
      <input
        type="hidden"
        name="form_id"
        value="acf6ea1"
        className="text-black bg-transparent box-border caret-transparent hidden p-[11px]"
      />
      <input
        type="hidden"
        name="referer_title"
        value="Page Not Found - Sureste sostenible"
        className="text-black bg-transparent box-border caret-transparent hidden p-[11px]"
      />
      <div className="box-border caret-transparent flex flex-wrap ml-[-5px] mr-[-5px] -mb-2.5">
        <div className="relative items-center box-border caret-transparent flex flex-wrap min-h-px w-full mb-2.5 px-[5px] md:w-[33.333%]">
          <input
            type="text"
            name="form_fields[field_24015a7]"
            placeholder="Nombre"
            className="text-black text-[15px] box-border caret-transparent block basis-full grow leading-[21px] max-w-full min-h-10 align-middle w-full border p-[11px] border-solid border-black/20 font-plus_jakarta_sans"
          />
        </div>
        <div className="relative items-center box-border caret-transparent flex flex-wrap min-h-px w-full mb-2.5 px-[5px] md:w-[33.333%]">
          <input
            type="text"
            name="form_fields[field_26f5e51]"
            placeholder="Apellido"
            className="text-black text-[15px] box-border caret-transparent block basis-full grow leading-[21px] max-w-full min-h-10 align-middle w-full border p-[11px] border-solid border-black/20 font-plus_jakarta_sans"
          />
        </div>
        <div className="relative items-center box-border caret-transparent flex flex-wrap min-h-px w-full mb-2.5 px-[5px] md:w-[33.333%]">
          <input
            type="email"
            name="form_fields[email]"
            placeholder="Correo electrónico"
            className="text-black text-[15px] box-border caret-transparent block basis-full grow leading-[21px] max-w-full min-h-10 align-middle w-full border p-[11px] border-solid border-black/20 font-plus_jakarta_sans"
          />
        </div>
        <div className="relative items-end box-border caret-transparent flex flex-wrap min-h-px w-full mb-2.5 px-[5px]">
          <button
            type="submit"
            className="text-white text-[15px] font-medium bg-blue-900 caret-transparent block fill-white basis-full leading-[15px] min-h-10 text-center capitalize text-nowrap px-[35px] py-[15px] font-plus_jakarta_sans"
          >
            <span className="items-center box-border caret-transparent gap-x-[5px] flex fill-white justify-center gap-y-[5px] text-nowrap">
              <span className="box-border caret-transparent block fill-white normal-case">
                Enviar
              </span>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};