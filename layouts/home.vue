<template>
  <div>
    <Hero>
      <Navbar />
    </Hero>

    <br />
    <br />
    <br />

    <nuxt />

    <br />
    <br />
    <br />
    <br />

    <Footer />
  </div>
</template>


<script>
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  components: { Hero, Navbar, Footer }
};
</script>