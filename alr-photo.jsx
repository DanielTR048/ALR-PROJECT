import React from "react";

const PHOTOS = {
  seguranca: {
    version: 4,
    alt: "Cena ilustrativa criada por IA: profissionais com uniformes verdes e capacetes brancos consultam uma prancheta em uma instalação industrial.",
    width: 1600,
    height: 900,
  },
  eletrica: {
    version: 2,
    alt: "Cena ilustrativa criada por IA: profissional com uniforme ALR registra uma inspeção diante de painéis elétricos fechados.",
    width: 1600,
    height: 900,
  },
  medicina: {
    version: 4,
    alt: "Cena ilustrativa criada por IA: profissional com jaleco ALR preenche um relatório de acompanhamento ocupacional.",
    width: 1600,
    height: 900,
  },
};

export function WorkPhoto({
  name,
  base,
  className = "",
  priority = false,
  sizes = "(max-width: 850px) calc(100vw - 40px), 400px",
}) {
  const photo = PHOTOS[name];
  return (
    <figure className={`work-photo work-photo--${name} ${className}`}>
      <img
        src={`${base}assets/photos/alr-${name}-v${photo.version}-960.webp`}
        srcSet={[480, 960, 1600]
          .map(
            (width) =>
              `${base}assets/photos/alr-${name}-v${photo.version}-${width}.webp ${width}w`,
          )
          .join(", ")}
        sizes={sizes}
        width={photo.width}
        height={photo.height}
        alt={photo.alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </figure>
  );
}
