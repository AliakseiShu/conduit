import React from 'react';
import { Container } from "../container/container";

export const Banner = () => {
  return (
    <main >
      <div>
        <div className="bg-green shadow-banner text-white p-8 mb-8">
         <Container>
           <h1 className="font-titillium drop-shadow-logo text-center text-conduitSize pb-2">conduit</h1>
           <p className="text-center text-2xl font-light">A place to share your knowledge.</p>
         </Container>
        </div>
      </div>
    </main>
  );
};
