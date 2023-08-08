import Image from 'next/image';
import styled from 'styled-components';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import ClientOnly from '@/components/ClientOnly';

const FontWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
`;

export default function Home() {
  return (
    <FontWrapper>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80'>
        <Head>
          <title> Ishpreet-Portfolio</title>
        </Head>

        <ClientOnly>
          <Header />

          <section id='hero' className='snap-start'>
            {/* <Hero/> */}
          </section>

          {/* About */}
          <section id='about' className='snap-center'>
            {/* <About/> */}
          </section>
          {/* Experience */}
          <section id='experience' className='snap-center'>
            {/* <Experience/> */}
          </section>
          {/* Skills */}
          <section id='skills' className='snap-start'>
            {/* <Skills/> */}
          </section>

          {/* Projects */}
          <section id='projects' className='snap-start'>
            {/* <Projects/> */}
          </section>

          {/* Contact Me */}
          <section id='contact' className='snap-start'>
            {/* <ContactMe/> */}
          </section>

          {/* Footer */}
          {/* <Link href='#hero'>
            <footer className='sticky bottom-5 w-full cursor-pointer'>
              <div className='flex items-center justify-center'>
                <Image
                  className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                  src='' alt=''
                />
              </div>
            </footer>
          </Link> */}
        </ClientOnly>
      </div>
    </FontWrapper>
  );
}
