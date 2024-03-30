import Image from 'next/image';
import Navbar from '@/components/global/navbar';
import { BentoGridSecondDemo } from '@/components/global/bentoGrid';

import Button from '@/components/global/ui/button';
import { CardHoverEffectDemo } from '@/components/global/cardGrid';
import { InfiniteMovingCards } from '@/components/global/infiniteMovingCards';
import { clients } from '@/lib/constants';
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';
import { CheckIcon } from 'lucide-react';
import { Footer } from '@/components/global/footer';


export default function Home() {
	return (
		<main  >
			<Navbar />
			<section className="relative p-2 md:p-10 mt-24">

				<h1 className="text-center text-3xl md:text-5xl lg:text-9xl font-bold lg:mt-16  mt-4 dark:text-neutral-50">
					ZENCY-AGENCY MANAGEMENT
				</h1>
				<p className="text-center text-neutral-600 m-2 md:text-xl md:m-6 lg:mb-24 dark:text-neutral-400">
					Manage all your agency work in one place. With absolute Automation
				</p>
				<Button text={"GET STARTED"} />
				<BentoGridSecondDemo />
			</section>



			<section className="flex justify-center">
				<InfiniteMovingCards className="md:mt-[8rem] mt-[4rem]"
					items={clients}
					direction="right"
					speed="slow" />
			</section>


			<section>

				<h1 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 bg-opacity-50 mt-44 mb-12">
					AUTOMATION  <br /> &quot;Trend&quot;
				</h1>
				<CardHoverEffectDemo />
				<Button text={"EXPLORE"} />
			</section>

			<section className="mb-36">
				<div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-12 mt-12">

					<CardContainer className="inter-var p-4">
						<CardBody className="bg-[#e2f24b] relative group/card
							dark:hover:shadow-2xl ☐ dark:hover:shadow-neutral-500/[0.1]
							Odark:bg-black dark:border-white/ [0.2] ☐ border-black/ [0.1]
							w-full md:!w-[25rem] h-auto rounded-xl px-4 py-10 md:p-12 border">
							<CardItem
								translateZ="60"
								className="text-neutral-900 text-md max-w-sm mt-2 font-bold "
							>
								PERSONAL USE
								<h2 className='text-6xl text-neutral-900 font-bold' >$0</h2>
							</CardItem>
							<CardItem
								translateZ="60"
								className="text-neutral-900 text-sm max-w-sm mt-2"
							>
								Get a glimpse of what our software is capable of. Just a heads
								up {"you'll"} never leave us after this!
								<ul className="my-4 flex flex-col gap-2">
									<li className="flex items-center gap-2">
										<CheckIcon />3 Free automations
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon />
										100 tasks per month
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon />
										Two-step Actions
									</li>
								</ul>
							</CardItem>
							<div className="flex justify-between items-center mt-8">
								<CardItem
									translateZ={20}
									as="button"
									className="px-2 py-2 rounded-xl text-sm font-normal text-neutral-900"
								>
									Try now →
								</CardItem>
								<CardItem
									translateZ={20}
									as="button"
									className="px-4 py-2 rounded-xl bg-neutral-900  text-neutral-200 text-sm font-bold"
								>
									Get Started Now
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>




					<CardContainer className="inter-var p-4">
						<CardBody className="bg-[#e2f24b] relative group/card
							dark:hover:shadow-2xl ☐ dark:hover:shadow-neutral-500/[0.1]
							Odark:bg-black dark:border-white/ [0.2] ☐ border-black/ [0.1]
							w-full md:!w-[25rem] h-auto rounded-xl px-4 py-10 md:p-12 border">
							<CardItem
								translateZ="60"
								className="text-neutral-900 text-md max-w-sm mt-2 font-bold "
							>
								FOR TEAMS
								<h2 className='text-6xl text-neutral-900 font-bold' >$99</h2>
							</CardItem>
							<CardItem
								translateZ="60"
								className="text-neutral-900 text-sm max-w-sm mt-2"
							>
								Get a glimpse of what our software is capable of. Just a heads
								up {"you'll"} never leave us after this!
								<ul className="my-4 flex flex-col gap-2">
									<li className="flex items-center gap-2">
										<CheckIcon />3 Free automations
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon />
										100 tasks per month
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon />
										Two-step Actions
									</li>
								</ul>
							</CardItem>
							<div className="flex justify-between items-center mt-8">
								<CardItem
									translateZ={20}
									as="button"
									className="px-2 py-2 rounded-xl text-sm font-normal text-neutral-900"
								>
									Try now →
								</CardItem>
								<CardItem
									translateZ={20}
									as="button"
									className="px-4 py-2 rounded-xl bg-neutral-900  text-neutral-200 text-sm font-bold"
								>
									Get Started Now
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>

					<CardContainer className="inter-var p-4">
						<CardBody className="bg-[#e2f24b] relative group/card
							dark:hover:shadow-2xl ☐ dark:hover:shadow-neutral-500/[0.1]
							Odark:bg-black dark:border-white/ [0.2] ☐ border-black/ [0.1]
							w-full md:!w-[25rem] h-auto rounded-xl px-4 py-10 md:p-12 border">
							<CardItem
								translateZ="60"
								className="text-neutral-900 text-md max-w-sm mt-2 font-bold "
							>
								FOR TEAMS
								<h2 className='text-6xl text-neutral-900 font-bold' >$199</h2>
							</CardItem>
							<CardItem
								translateZ="60"
								className="text-neutral-900 text-sm max-w-sm mt-2"
							>
								Get a glimpse of what our software is capable of. Just a heads
								up {"you'll"} never leave us after this!
								<ul className="my-4 flex flex-col gap-2">
									<li className="flex items-center gap-2">
										<CheckIcon />3 Free automations
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon />
										100 tasks per month
									</li>
									<li className="flex items-center gap-2">
										<CheckIcon />
										Two-step Actions
									</li>
								</ul>
							</CardItem>
							<div className="flex justify-between items-center mt-8">
								<CardItem
									translateZ={20}
									as="button"
									className="px-2 py-2 rounded-xl text-sm font-normal text-neutral-900"
								>
									Try now →
								</CardItem>
								<CardItem
									translateZ={20}
									as="button"
									className="px-4 py-2 rounded-xl bg-neutral-900  text-neutral-200 text-sm font-bold"
								>
									Get Started Now
								</CardItem>
							</div>
						</CardBody>
					</CardContainer>

				</div>
			</section>

			<Footer/>
		</main>
	);
}
