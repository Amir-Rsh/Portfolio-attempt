import thesisImg2 from "../assets/Screenshot from 2025-07-06 16-43-18.png";

export default function ThesisPage2() {
  return (
    <>
      <div style={{ marginTop: "90px" }}>
        <p className="thesisText">
          <span>{"> "}</span>Abstract
        </p>
      </div>
      <br />
      <div style={{ marginTop: "20px" }}>
        <p
          style={{ padding: "40px", lineHeight: "40px" }}
          className="thesisText"
        >
          Cosmetics have been an important aspect of our daily lives for
          hundreds of years. Throughout the recent years toxicologists have made
          many discoveries regarding the safety of cosmetics and their
          ingredients and light has been shed on some of the toxic effects of
          ingredients used in these products, and measures are being taken to
          make these products safer for the consumers. Some cosmetic ingredients
          have been used since ancient Egyptian times and some of them have come
          into the market recently but whether old or new many of these products
          have been proven to be toxic specially in cases where the exposure to
          the substance is frequent. There is insufficient data on the safety of
          a large portion of cosmetic products and many toxicologists are
          experimenting with different cosmetic ingredients to find if there is
          a possible link to carcinogenicity or many other toxic effects of the
          cosmetics. It is through these experiments and the data that they
          present that rules and regulations can be made regarding the safety of
          cosmetics and banning certain ingredients that are found to be toxic
          for the human body. Among the ingredients being extensively tested are
          talc, paraben, phthalate and alpha hydroxy acid. Some scientific data
          gathered in the recent years have been reviewed and part of these data
          may be insufficient to reach a solid conclusion about the toxicity of
          ingredients, nevertheless this information is important for
          toxicologists to be more prepared should they be interested in
          experimenting with these ingredients.
        </p>
      </div>
      <br />

      <div
        style={{
          width: "100%",
        }}
      >
        <img
          style={{ width: "80%", marginLeft: "10%" }}
          src={thesisImg2}
          alt=""
        />
      </div>
      <br />
      <div style={{ marginTop: "90px" }}>
        <p className="thesisText">
          <span>{"> "}</span>Summary
        </p>
      </div>
      <br />
      <div style={{ marginTop: "20px" }}>
        <p
          style={{ padding: "40px", lineHeight: "40px" }}
          className="thesisText"
        >
          Through this review of literature, we have found cosmetic toxicity to
          be a very interesting topic for todays scientists and scholars. In the
          ever-changing industry of cosmetics and with the introduction of new
          ingredients with relatively unknown toxicity profiles the need for the
          experiments and data about the products are vital for the safety of
          consumers. As we have discussed cosmetics that contain toxic
          ingredients can cause a vast spectrum of harmful effects on the body
          from a simple rash to cancer. The regulatory organization in charge of
          the cosmetics regulation must come up with new rules and use the data
          gathered by the scientists to define the safety of cosmetics for the
          consumers. Talc was found to be toxic specially harming the lungs and
          disrupting their function. Phthalates have been found to be endocrine
          disruptors and possible cause of developmental and reproductive
          toxicity. Parabens have also been linked to disruption of endocrine,
          also, they have been linked to cancer although the data on their
          carcinogenicity is not sufficient. Alpha hydroxy acids can cause
          swelling redness and photo toxicity. The data linking AHAs to skin
          cancer is not sufficient. Most of these data have been gathered in
          recent years. Many ingredients have been banned over the years and the
          cosmetic products are becoming more strictly regulated in many
          countries.
        </p>
      </div>
      <br />
    </>
  );
}
