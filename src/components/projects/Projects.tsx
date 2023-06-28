import {component$, useStore, useStylesScoped$} from "@builder.io/qwik";
import ProjectsStyle from "./projects.css?inline"
import {Link} from "@builder.io/qwik-city";

interface ProjectType {
    id: string,
    title: string,
    technologies: string[],
    link: string,
    description: string,
    imageLink: string,
    type: "Live" | "Project"
}

export default component$(() => {

    const projects: ProjectType[] = useStore([{
        id: "1",
        title: "ChertNodes",
        technologies: ["react", "tailwind"],
        link: "hello",
        description: "Minecraft servers hosting",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5J8mKTgcTD92QT73XbNaE4hl2dGbJlr_oQ&usqp=CAU ",
        type: "Live"

    },{
        id: "1",
        title: "ChertNodes",
        technologies: ["react", "tailwind","something","some","mongo","nodeJs"],
        link: "hello",
        description: "Minecraft servers hosting",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5J8mKTgcTD92QT73XbNaE4hl2dGbJlr_oQ&usqp=CAU ",
        type: "Live"

    },{
        id: "1",
        title: "ChertNodes",
        technologies: ["react", "tailwind"],
        link: "hello",
        description: "Minecraft servers hosting",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5J8mKTgcTD92QT73XbNaE4hl2dGbJlr_oQ&usqp=CAU ",
        type: "Live"

    }])
    useStylesScoped$(ProjectsStyle)

    return (
        <>
            <div class="projects__container">
                <div class="header">
                    <p class="header-title"><span>#</span>projects</p>
                    <a class="header-link" href="/projects">view all ~~{">"}</a>
                </div>
                <div class={"projects"}>
                    {projects.map((project) => {
                        return (
                            <div class="card" key={project.id}>
                                <img src={project.imageLink} height={200} width={330} alt={"project image"}/>
                                <div class={"card__technologies"}>
                                    {project.technologies.map(tech => (
                                        <span class={'card__technology'}>{tech}</span>
                                    ))}
                                </div>
                                <div class={"card__info"}>
                                    <h2 class={"info__title"}>{project.title}</h2>
                                    <p class={"info__desc"}>{project.description}</p>
                                    <button class={"button button--primary"}><Link
                                        style={{color: "white", textDecoration: 'none'}}
                                        href={project.link}>{project.type}{"   ~~>"}</Link></button>
                                </div>
                            </div>)

                    })}
                </div>
            </div>
        </>
    )
})