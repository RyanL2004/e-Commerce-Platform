import { useState } from "react";
import Layout from "./Layouts/Layouts";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto" bis_skin_checked="1">
            <div class="flex flex-wrap -m-4" bis_skin_checked="1">
              {/*First Product*/}
              <div class="p-4 lg:w-1/4 md:w-1/2" bis_skin_checked="1">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">                  
                    <div class="mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img
                          src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  class="absolute inset-0"
                                ></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Second Product*/}
              <div class="p-4 lg:w-1/4 md:w-1/2" bis_skin_checked="1">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">                  
                    <div class="mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img
                          src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  class="absolute inset-0"
                                ></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Third Product*/}
              <div class="p-4 lg:w-1/4 md:w-1/2" bis_skin_checked="1">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">                  
                    <div class="mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img
                          src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  class="absolute inset-0"
                                ></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Fourth Product*/}
              <div class="p-4 lg:w-1/4 md:w-1/2" bis_skin_checked="1">
                <div class="bg-white">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">                  
                    <div class="mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      <div class="group relative">
                        <img
                          src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
                          alt="Front of men&#039;s Basic Tee in black."
                          class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div class="mt-4 flex justify-between">
                          <div>
                            <h3 class="text-sm text-gray-700">
                              <a href="#">
                                <span
                                  aria-hidden="true"
                                  class="absolute inset-0"
                                ></span>
                                Basic Tee
                              </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Black</p>
                          </div>
                          <p class="text-sm font-medium text-gray-900">$35</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default App;
