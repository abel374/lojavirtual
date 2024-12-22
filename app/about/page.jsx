export default function About() {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='max-w-2xl mx-auto p-3 text-center'>
          <div>
            <h1 className='text-3xl font font-semibold text-center my-7'>
              Sobre o Blogue Abel Cassinda
            </h1>
            <div className='text-md text-gray-500 flex flex-col gap-6'>
              <p>
              Bem-vindo ao blog de Sahand! Criado por Sahand Ghavidel, este blog
serve como uma plataforma pessoal para compartilhar seus insights e ideias com
o mundo. Sahand é um desenvolvedor entusiasmado que gosta de escrever
sobre tecnologia, codificação e uma variedade de tópicos relacionados.
              </p>
  
              <p>
              Neste blog, você descobrirá artigos e tutoriais semanais
cobrindo uma variedade de tópicos, incluindo desenvolvimento web, engenharia
de software e linguagens de programação. Sahand está continuamente
aprendendo e explorando novas tecnologias, então certifique-se de visitar
frequentemente para as últimas atualizações!
              </p>
  
              <p>
              Este site foi criado usando Next.js e{' '}
                <a
                  href='https://go.clerk.com/fgJHKlt'
                  target='_blank'
                  className='text-teal-500 hover:underline'
                >
                  Clerk
                </a>
                .
              </p>
  
              <p>
              Convidamos você a comentar nossas postagens e interagir com outros
leitores. Você pode curtir e responder aos comentários dos outros também. Nós
acreditamos que uma comunidade de alunos pode apoiar o crescimento e o desenvolvimento uns dos outros.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }