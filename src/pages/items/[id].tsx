import Layout from '../../../components/layout';

export default function ItemDetail() {
  return (
    <Layout title="상품 상세" canGoBack>
      <div className="px-4 py-16">
        <div>
          <div className="h-96 bg-slate-300" />
          <div className="flex py-3 border-t border-b items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jobs</p>
              <p className="text-xs font-medium text-gray-400 cursor-pointer">
                View Profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S23</h1>
            <span className="text-3xl block mt-2 text-gray-900">$699</span>
            <p className="text-base my-6 text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 font-medium">
                채팅하기
              </button>
              <button className="p-3 flex items-center justify-center text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="mt-5 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i} className="">
                <div className="w-full h-56 bg-slate-300 mb-3" />
                <h3 className="text-gray-700 -mb-0.5">Iphone 14 Pro</h3>
                <span className="text-sm font-medium text-gray-900">$899</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
