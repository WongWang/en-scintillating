import Footer from "../ui/footer";
import NavBar from "../ui/nav";
import Link from 'next/link';

const buttonStyleDark = 'border border-gray-600 text-nord4 bg-nord0 hover:bg-nord1 hover:text-nord6 font-medium rounded-lg text-base w-full py-2 self-center text-center';
const buttonStyleBright = 'text-nord0 bg-nord6 hover:bg-nord4 font-medium rounded-lg text-base w-full py-2 self-center text-center';

const plans = [
  { 
    planName: 'Free',
    users: 'For individuals',
    description: 'Write with confidence—polish your words for free, anytime, anywhere.',
    pricePerTimeUnit: '$0',
    timeUnit: 'month',
    buttonPrompt: 'Get Started',
    buttonHref: '/home',
    features: [
      'Fix mistakes and write error-free',
      'Improve sentence flow and readability',
      'Get creative phrasing and alternative wordings',
      'Edit anywhere, anytime'
    ]
  },
  { 
    planName: 'Pro',
    users: 'For teams and individuals',
    description: 'Elevate your communication—pro-grade clarity at scale.',
    pricePerTimeUnit: '$0',
    timeUnit: 'month',
    buttonPrompt: 'Coming Soon',
    buttonHref: '#',
    features: [
      'All features in free',
      'Precise corrections for your field',
      'Integrate with tools like Notion, Slack, and Microsoft Office',
      'Share edits, comments, and maintain a consistent style',
      'Multi-language support',
    ]
  },
  { 
    planName: 'Enterprise',
    users: 'For large organizations',
    description: 'Precision at enterprise scale—seamless, secure, and tailored to your workflows.',
    pricePerTimeUnit: '$0',
    timeUnit: 'month',
    buttonPrompt: 'Contact Sales',
    buttonHref: '#',
    features: [
      'All features in pro',
      'Enforce company terminology and style guides',
      'Auto-filter sensitive or non-compliant language',
      'Enterprise-grade encryption for team documents',
      '24/7 Dedicated support',
    ]
  },
];

function PlanFeatures({ plan, isMiddle, showPrice }: { plan: typeof plans[0], isMiddle: boolean, showPrice: boolean}) {
  return (
    <div className={"flex flex-col" + (isMiddle ? ' pt-10' : '')}>
      <div className="h-8 text-sm text-nord6">{plan.users}</div>
      <div className="h-10 text-3xl font-bold text-nord6">{plan.planName}</div>
      <div className="h-20 text-sm text-nord6">{plan.description}</div>
      {showPrice ? (
          <div className="h-10 flex justify-start items-center gap-3">
            <span className="text-3xl font-bold text-nord6">{plan.pricePerTimeUnit}</span>
            <span className="text-base font-bold text-nord6">per {plan.timeUnit}</span>
          </div>
        ) : ( <div className="h-10"></div> )
      }

      <div className="h-20 flex items-center justify-center w-full self-center">
        <Link href={plan.buttonHref} className={isMiddle ? buttonStyleBright : buttonStyleDark}>{plan.buttonPrompt}</Link>
      </div>
      <ul className="list-disc text-base">
        {plan.features.map((feature, index) => {
          return (
            <li key={index} className="my-3 text-nord6">
              {feature}
            </li>
          );
        })}
    </ul>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-nord0">
      <NavBar />
      <main className="flex flex-col items-center my-10 lg:my-18 mx-5 max-w-7xl">
        <h1 className="text-left sm:text-center font-semibold text-3xl sm:text-4xl lg:text-5xl lg:leading-14 text-nord6">We are currently free for individual users!</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 rounded-lg">
          <div className="flex flex-col border border-gray-600 rounded-lg lg:border-r-0 lg:rounded-r-none mt-10 lg:mt-30 p-10">
            <PlanFeatures plan={plans[1]} isMiddle={false} showPrice={false} />
          </div>
          <div className="flex flex-col border border-nord6 rounded-lg lg:rounded-b-none mt-10 lg:mt-20 p-10">
            <div className="flex items-center justify-center h-10 rounded-t-lg bg-nord6 -mx-10 -mt-10">
              <p className="text-nord0 text-lg font-bold">Most Popular</p>
            </div>
            <PlanFeatures plan={plans[0]} isMiddle={true} showPrice={true} />
          </div>
          <div className="flex flex-col border border-gray-600 rounded-lg lg:border-l-0 lg:rounded-l-none mt-10 lg:mt-30 p-10">
            <PlanFeatures plan={plans[2]} isMiddle={false} showPrice={false} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}