export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      
      <div className="w-full max-w-sm">

        <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-800">

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">
                AZN Digital
              </h1>

              <p className="text-zinc-400 text-sm">
                Multi-Chain Wallet
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold">
              A
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-6 mb-6">

            <p className="text-sm opacity-80 mb-2">
              Total Balance
            </p>

            <h2 className="text-4xl font-bold">
              $84,950.00
            </h2>

            <div className="mt-4 flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                +12.4%
              </span>

              <span className="text-sm opacity-80">
                This Month
              </span>
            </div>
          </div>

          <div className="space-y-4">

            <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-orange-500"></div>

                <div>
                  <h3 className="font-semibold">
                    Bitcoin
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    BTC
                  </p>
                </div>
              </div>

              <div className="text-right">
                <h3 className="font-semibold">
                  1.245 BTC
                </h3>

                <p className="text-green-400 text-sm">
                  +4.2%
                </p>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-green-500"></div>

                <div>
                  <h3 className="font-semibold">
                    Tether
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    USDT
                  </p>
                </div>
              </div>

              <div className="text-right">
                <h3 className="font-semibold">
                  24,500 USDT
                </h3>

                <p className="text-green-400 text-sm">
                  +1.1%
                </p>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-4 gap-3 mt-8">

            <button className="bg-blue-600 rounded-2xl py-3 font-semibold">
              Send
            </button>

            <button className="bg-zinc-800 rounded-2xl py-3 font-semibold">
              Receive
            </button>

            <button className="bg-zinc-800 rounded-2xl py-3 font-semibold">
              Swap
            </button>

            <button className="bg-zinc-800 rounded-2xl py-3 font-semibold">
              Stake
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
