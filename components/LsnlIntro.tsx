import Typewriter from "typewriter-effect";

export default function LsnlIntro() {
  return (
    <h1>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "<span>Network</span> <span>Architecture</span> <span>Laboratory</span>",
            )
            .start();
        }}
        options={{ delay: 75 }}
      />
    </h1>
  );
}
