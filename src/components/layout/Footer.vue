<template>
  <footer className="bg-base-300 text-base-content">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Contact Information -->
        <div className="card bg-base-100 shadow-xl p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-primary">Elérhetőségek</h3>
          <div className="space-y-4">
            <a href="tel:phone" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="group-hover:text-primary transition-colors">
                +36/30-548-4698
              </span>
            </a>
            <a href="mailto:email" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="group-hover:text-primary transition-colors">
                cseresznyefavendeghazdorog@gmail.com
              </span>
            </a>
            <a
              href="https://facebook.com/CseresznyefaVendégház"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </div>
              <span className="group-hover:text-primary transition-colors">
                Cseresznyefa Vendégház
              </span>
            </a>
          </div>
        </div>

        <!-- General Information -->
        <div className="card bg-base-100 shadow-xl p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-primary">
            Általános információk
          </h3>
          <div className="space-y-4">
            <a
              href="/vendegtajekoztato.pdf"
              className="flex items-center gap-3 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="group-hover:text-primary transition-colors">
                vendegtajekoztato.pdf
              </span>
            </a>
            <a
              href="/booklet-en.pdf"
              className="flex items-center gap-3 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </div>
              <span className="group-hover:text-primary transition-colors">
                Booklet (English version)
              </span>
            </a>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span>NTAK azonosító: EG24090226</span>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div className="card bg-base-100 shadow-xl p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-6 text-primary">Nyitvatartás</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Bejelentkezés</p>
                <p className="text-base-content/70">15:00 után</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">Kijelentkezés</p>
                <p className="text-base-content/70">10:00 - ig</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div className="mt-5 pt-8 border-t border-base-content/10 text-center">
        <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg">
          <p className="text-primary font-medium">
            © {{ new Date().getFullYear() }} Cseresznyefa Vendégház.{{ " " }}
            <span className="font-bold">Minden jog fenntartva.</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
