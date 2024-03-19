import { translation as hero } from "../pages/homePage/components/Hero/translation"
import { translation as designers } from "../pages/homePage/components/Designers/translation"
import { translation as skills } from "../pages/homePage/components/ImproveSkills/translation"

export const fr = {
    learn: "Bienvenue à React et react-i18next", ...hero.fr, ...designers.fr, ...skills.fr
}