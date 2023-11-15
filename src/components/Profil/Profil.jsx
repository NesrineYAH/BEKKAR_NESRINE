import React from "react";
import { useTranslation } from "react-i18next";
import Biographie from "../../Containers/Biographie/Biographie";

const Profil = () => {
    const { t } = useTranslation();
  return (
    <section id={t("Profil")}>
    <div className="Profil__container">
      <div className="Profil__info">
        {/* <p className="Profil__biography"> 
         Je suis Nesrine , je suis développeuse web frontend créative, autonome et passionnée par tous ce qui lien avec la technologie, l’informatique, web exactement la création de sites web et d’applications e-commerce, et même des refontes de site web, dotée d’une expérience dans différents secteurs d’activités.
         Après avoir obtenu un diplôme de licence BAC+4 en Marketing de l’école supérieur de commerce d’Alger,  j’ai commencé ma carrière professionnelle avec un poste de chargée clientèle que je l’ai occupé pendant 2 ans chez une entreprise de livraison en suite  j’ai une assistante de direction et juste après j’ai occupé un poste de téléconseillère pendant 3 ans au niveau du centre d’appel de MOBILIS le 1 er opérateur de téléphonie mobile en Algérie.
         </p>    */}
      </div>
     <Biographie /> 
    </div>
    </section>
  );
};

export default Profil;
