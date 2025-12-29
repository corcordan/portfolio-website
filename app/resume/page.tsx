import Navbar from '../components/Navbar'
import Link from 'next/link'
import Skills from '../components/Skills'
import Career from '../components/Career'

const ResumePage = () => {
  return (
    <div className="flex justify-center">
			<div className="w-2/5 relative flex flex-col">
				<Navbar />
				<main className="mb-8">
					<Link href="/CorcordanResume.pdf" download className="text-xl mt-16 bg-lush p-2 rounded-lg">Download Here!</Link>
          <Career />
          <Skills />
				</main>
			</div>
		</div>
  )
}

export default ResumePage