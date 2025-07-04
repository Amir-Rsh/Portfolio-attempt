import thesisImg1 from "../assets/Screenshot from 2025-07-04 17-38-16.png";

export default function ThesisPage() {
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
          With the recent advancements in the field of drug discovery many
          opportunities have been presented to design novel analogues for
          improvement and optimization of drug compounds to alter their potency,
          stability, and other properties. Peptide drugs are being researched
          extensively due to their high specificity for their target receptor
          and their suitable toxicity profile. However, one of the downsides of
          such therapeutics is their susceptibility to proteolysis and rapid
          degradation by the proteolytic enzymes. Goserelin is an analogue of
          gonadotropin-releasing hormone (GnRH) that has been developed to treat
          breast, and prostate cancer. Goserelin is highly susceptible to
          proteolysis by the enzyme chymotrypsin. by reviewing the literature
          surrounding the degradation of peptide drugs and with the aid of
          proteolysis prediction tools the potential sites of cleavage can be
          defined and efforts can be made to alter the structure at the sites of
          cleavage to improve the stability of peptide drugs. Many computational
          methods are available to scientist for the process of design of novel
          therapeutic agents. Computer-assisted drug design has proven to be
          very effective in the development and assessment of compounds based on
          properties such as binding affinity, flexibility, binding interactions
          with the receptor, and other properties. One of the computational
          methods being used in this field is molecular docking. This powerful
          tool is used to assess the binding affinity of ligand of different
          shape and sizes to a specific receptor through a process named
          “docking”. By using this technique and with the aid of tools that
          predict stability and toxicity of compound based on their structure
          research can be carried to design novel peptidomimetics of Goserelin
          that could prove to be more stable and perhaps even the possibility of
          designing an oral form of the drug can become a reality.
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
          src={thesisImg1}
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
          With the recent increase in demand for peptide drugs due to their high
          specificity towards their target receptor more and more research are
          being conducted on the development of these therapeutics. There are
          already a number of peptide drugs released into the market that have
          been developed to treat conditions and diseases such as cancer.
          Goserelin is among the analogues of gonadotropin-releasing hormone
          that has agonistic action on the GnRH receptor which ultimately
          results in lowering of the sex hormones and is used as a treatment for
          prostate, and breast cancer. Like many other peptide drugs, one of the
          flaws of Goserelin is its low proteolytic stability and fast
          degradation by the gastric enzymes. Efforts are being made to increase
          the proteolytic stability of peptide drugs and computer-aided drug
          design has proven to be an important asset in the design and
          development of peptide drug analogues. The aim of this research was to
          use the computational versatility of Schrodingers software (Maestro)
          to carry out the molecular docking of a number of analogues designed
          to improve the stability of the drug while retaining the desired
          agonistic action of Goserelin on the GnRH receptor. 39GnRH was docked
          in the structure of GnRH receptor to validate the docking on the PDF
          file (7BR3). Through observation of the binding pocket all of the
          important agonistic interactions between GnRH and its receptor could
          not be confirmed. In many poses of the docked molecule some
          interactions were missing. Alphafold 2 was used to generate the
          three-dimensional structure of GnRH receptor and docking was carried
          out on the artificial intelligence generated structure to make a
          comparison with the crystal structure. The binding affinity of GnRH
          and Goserelin were found to be lower to the Alphafold structure. The
          binding pocket of the crystal structure were smaller that that of the
          Alphafold structure. The number of favourable interactions were not
          improved when docking was performed with the Alphafold structure. The
          crystal structure (7BR3) was therefore chosen for the docking of the
          analogues. The analogues were designed by introduction of non-natural
          amino acids in the structure of Goserelin. The structure of the
          analogues were drawn, prepared, and docked with the GnRH receptor
          using Maestro and DataWarrior. The analogues with the highest binding
          affinity were selected for the next part of the experiment. The
          docking of the analogues with the proteolytic enzymes and making the
          comparison between their binding affinity and that of GnRH and
          Goserelin proved that the analogues were less likely to attach to the
          enzymes than Goserelin.
        </p>
      </div>
      <br />
    </>
  );
}
