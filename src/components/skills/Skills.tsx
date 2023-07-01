import {component$, useStore, useStylesScoped$} from "@builder.io/qwik";
import skillsStyles from "./skills.css"


interface skills {
    title: string,
    skills: string [],
}


export default component$(() => {

    useStylesScoped$(skillsStyles);


    const skills1: skills = useStore({
        title: "Languages",
        skills: ["Javascript", "Typescript", "Python", "Bash", "Java", "C"]
    })

    const skills2: skills[] = useStore([{
        title: "Databases",
        skills: ["MongoDB"]
    }, {
        title: "Other",
        skills: ["HTML", "CSS", "EJS", "REST"]
    }])

    const skills3: skills[] = useStore([{
        title: "Tools",
        skills: ["Vscode", "Neovim", "Linux", "Figma", "Sway", "Arch", "Git", "WebStorm"]
    }, {
        title: "Frameworks",
        skills: ["React", "NextJS", "Qwik", "Tailwind CSS", "Express", "Prisma", "Mui"]
    }])


    return (
        <div class={"skills__container"}>
            <div class={"header"}>
                <p class="header-title header-title--smaller"><span>#</span>skills</p>
            </div>
            <div class={"skills"}>
                <img src={"/assets/shapes.svg"} width={349} height={282} alt={"shapes"}/>
                <div class={"skills__details"}>
                    <div class={"skills__table skills-1 skills__group"}>
                        <h2 class={"skills__title"}>{skills1.title}</h2>
                        <div class={"skills__list"}>
                            {skills1.skills.map(skill => (

                                <span>{skill}</span>

                            ))}
                        </div>
                    </div>
                    <div class={"skills__group"}>
                        {skills2.map(skills1  => (
                            <div class={"skills__table skills-1"}>
                                <h2 class={"skills__title"}>{skills1.title}</h2>
                                <div class={"skills__list"}>
                                    {skills1.skills.map(skill => (

                                        <span>{skill}</span>

                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class={"skills__group"}>
                        {skills3.map(skills1  => (
                            <div class={"skills__table skills-1"}>
                                <h2 class={"skills__title"}>{skills1.title}</h2>
                                <div class={"skills__list"}>
                                    {skills1.skills.map(skill => (

                                        <span>{skill}</span>

                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
})