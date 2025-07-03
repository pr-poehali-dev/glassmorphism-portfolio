import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Современная торговая платформа с React и Node.js",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/img/4d6995ec-b421-4c57-bc52-b46d3793bc55.jpg",
    },
    {
      title: "Task Management App",
      description:
        "Приложение для управления задачами с real-time обновлениями",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "/img/4acb813a-569b-4ec0-bfc7-e41dcee38507.jpg",
    },
    {
      title: "Portfolio Website",
      description: "Адаптивный сайт-портфолио с современным дизайном",
      tech: ["React", "Vite", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "/img/224fad9b-19e2-4979-b4c0-d20a87a1b67a.jpg",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))] animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Алексей Иванов</div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              Обо мне
            </a>
            <a
              href="#projects"
              className="text-white/80 hover:text-white transition-colors"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20">
            <h1 className="text-6xl font-bold text-white mb-6">
              Веб-разработчик
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                Full Stack
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Создаю современные веб-приложения с использованием последних
              технологий. Специализируюсь на React, TypeScript и Node.js.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать CV
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                <Icon name="Github" className="mr-2" size={20} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Обо мне
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Навыки
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-white">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Опыт</h3>
                <p className="text-white/80 mb-6">
                  5+ лет опыта в разработке веб-приложений. Работал с различными
                  проектами: от лендингов до сложных SPA и мобильных приложений.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Vue.js",
                    "TypeScript",
                    "Node.js",
                    "Python",
                    "MongoDB",
                    "PostgreSQL",
                    "Docker",
                    "AWS",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/20 text-white hover:bg-white/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Проекты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-lg bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Icon name="Github" className="mr-2" size={16} />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Icon name="ExternalLink" className="mr-2" size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Контакты
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Свяжитесь со мной
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" className="text-purple-400" size={24} />
                    <span className="text-white/80">
                      alex.ivanov@example.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" className="text-purple-400" size={24} />
                    <span className="text-white/80">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" className="text-purple-400" size={24} />
                    <span className="text-white/80">Москва, Россия</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Icon name="Github" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Icon name="Linkedin" size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Сообщение"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
