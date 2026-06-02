import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* NAV */}
      <header className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tight">
          Haploblocks
        </div>
        <nav className="flex gap-6 text-sm text-slate-600">
          <a href="#abstract" className="hover:text-slate-900">Abstract</a>
          <a href="#pipeline" className="hover:text-slate-900">Pipeline</a>
          <a href="#results" className="hover:text-slate-900">Results</a>
          <a href="#paper" className="hover:text-slate-900">Paper</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Decoding Genotype–Phenotype Interactions
            <span className="block text-slate-500 mt-2">
              using Genomic Hashes
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A scalable framework that discretizes the genome into haploblocks and
            represents each individual as a compact genomic hash for efficient
            genotype–phenotype mapping.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://osf.io/preprints/biohackrxiv/xhkc3_v1"
              className="px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
            >
              Read Paper
            </a>
            <a
              href="https://github.com/collaborativebioinformatics/Haploblock_Clusters_ElixirBH25"
              className="px-5 py-3 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100"
            >
              GitHub
            </a>
          </div>
        </div>

       {/* VISUAL BLOCK */}
<div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm p-6 overflow-hidden">

  <div className="text-slate-500 mb-4 font-medium">
    Genomic Cluster Engine 
  </div>

  {/* BIT LAYOUT */}
  <div className="font-mono text-xs">

    <div className="mb-4 text-slate-600">
       64-bit Hash Encoding Architecture
    </div>

    <div className="grid grid-cols-5 gap-2 text-center text-[10px] mb-3">
      <div className="bg-slate-900 text-white rounded p-2">S (4)</div>
      <div className="bg-blue-100 rounded p-2">CHROM (10)</div>
      <div className="bg-indigo-100 rounded p-2">HAPLO (20)</div>
      <div className="bg-purple-100 rounded p-2">CLUSTER (20)</div>
      <div className="bg-emerald-100 rounded p-2">VAR (10)</div>
    </div>

    {/* EXAMPLE INSTANCE */}
    <div className="mt-5 border rounded-lg bg-white p-4 space-y-2">

      <div className="text-slate-500 text-[11px]">
        Example encoded genomic hash
      </div>

      <div className="flex justify-between text-xs">
        <span>Strand</span>
        <span className="font-mono">0001</span>
      </div>

      <div className="flex justify-between text-xs">
        <span>Chromosome</span>
        <span className="font-mono">0000010110</span>
      </div>

      <div className="flex justify-between text-xs">
        <span>Haploblock</span>
        <span className="font-mono">101100101001</span>
      </div>

      <div className="flex justify-between text-xs">
        <span>Cluster</span>
        <span className="font-mono">00011</span>
      </div>

      <div className="flex justify-between text-xs">
        <span>Variants</span>
        <span className="font-mono">A/T/G/C encoded</span>
      </div>
    </div>
  </div>
</div>
      </section>

      {/* ABSTRACT */}
      <section id="abstract" className="max-w-4xl mx-auto px-8 py-20">
        <h2 className="text-2xl font-bold mb-6">Abstract</h2>
        <p className="text-slate-700 leading-relaxed text-lg">
          Despite advances in genome sequencing, the relationship between genotype and phenotype remains incompletely understood due to complex interactions between variants and genomic background. We introduce a haploblock-based framework that discretizes the genome into recombination-defined regions and encodes local genomic structure as binary hashes. This representation enables scalable clustering of individuals and supports machine learning models for genotype–phenotype mapping.
        </p>
      </section>

      {/* PIPELINE */}
      <section id="pipeline" className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-10">Pipeline Overview</h2>

          <div className="grid md:grid-cols-5 gap-4 text-sm mb-10">
            {[
              "Defining haploblocks from recombination rates",
              "Extracting and phasing haploblock sequences",
              "Merging haplotypes into FASTA",
              "Clustering sequences with MMseqs2",
              "Generating genomic hashes",
            ].map((step, i) => (
              <div key={step} className="p-4 rounded-xl bg-white/10">
                <div className="text-xs text-slate-300 mb-2">Step {i + 1}</div>
                <div className="font-medium">{step}</div>
              </div>
            ))}
          </div>

          <img
            src="/figures/haploblocks_pipeline.png"
            className="rounded-2xl border border-white/10"
            alt="pipeline"
          />
        </div>
      </section>

 {/* RESULTS */}
<section
  id="results"
  className="bg-slate-50 border-y border-slate-200"
>
  <div className="max-w-6xl mx-auto px-8 py-24">

    {/* HEADER */}
    <h2 className="text-3xl font-bold mb-4">
      Results
    </h2>

    <p className="text-slate-600 max-w-3xl mb-16 text-lg leading-relaxed">
      We applied the Haploblocks pipeline to the 1000 Genomes Project using the
      GRCh38 reference genome and genome-wide recombination maps. Across all
      autosomes and chromosome X, we identified recombination-defined genomic
      regions that serve as the foundation for genomic hash generation and
      downstream genotype–phenotype modeling.
    </p>

    {/* DATASET */}
    <div className="mb-20">
      <h3 className="text-xl font-semibold mb-6">
        Dataset
      </h3>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="text-sm text-slate-500 mb-2">Cohort</div>
          <div className="text-2xl font-bold">1000 Genomes Project</div>
          <div className="mt-3 text-sm text-slate-600">
            2,548 individuals across 26 populations.
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="text-sm text-slate-500 mb-2">Reference Genome</div>
          <div className="text-2xl font-bold">GRCh38</div>
          <div className="mt-3 text-sm text-slate-600">
            UCSC Genome Browser assembly.
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <div className="text-sm text-slate-500 mb-2">Coverage</div>
          <div className="text-2xl font-bold">chr1–22 + chrX</div>
          <div className="mt-3 text-sm text-slate-600">
            Whole-genome haploblock segmentation using recombination maps.
          </div>
        </div>

      </div>
    </div>

    {/* HAPLOBLOCK DISCOVERY */}
    <div className="mb-16">

      <h3 className="text-xl font-semibold mb-6">
        Haploblock Discovery
      </h3>

      <div className="grid md:grid-cols-4 gap-6">

        {[
          { value: "39,141", label: "Haploblocks" },
          { value: "2,548", label: "Individuals" },
          { value: "26", label: "Populations" },
          { value: "23", label: "Chromosomes" }
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 text-white p-8 text-center shadow-lg"
          >
            <div className="text-4xl font-bold">
              {item.value}
            </div>
            <div className="mt-2 text-slate-300">
              {item.label}
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* FIGURES */}
    <div>

      <h3 className="text-xl font-semibold mb-6">
        Genome-wide structure
      </h3>

      <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">

        {[
          { t: "Size distribution", i: "01_size_distribution.png" },
          { t: "Blocks per chromosome", i: "04_blocks_per_chr.png" },
          { t: "Mean size per chromosome", i: "05_mean_size_chr.png" },
          { t: "ECDF distribution", i: "03_ecdf.png" },
          { t: "Chromosome variability", i: "02_chr_boxplot.png" },
          { t: "Size vs genomic position", i: "06_size_vs_position.png" },
          { t: "Genomic hash density", i: "07_density.png" },
        ].map((f) => (
          <div key={f.i} className="min-w-[85%] snap-center">

            <div className="mb-3 text-sm font-medium text-slate-700">
              {f.t}
            </div>

            <img
              src={`/figures/${f.i}`}
              className="rounded-xl border bg-white shadow-sm"
            />

          </div>
        ))}

      </div>
    </div>

    {/* CLUSTERING RESULTS */}
<div className="mb-20">

  <h3 className="text-xl font-semibold mb-4">
    Haploblock Clustering
  </h3>

  <p className="text-slate-600 max-w-3xl mb-8">
    Individuals sharing highly similar haplotypes within a haploblock are
    grouped into clusters. Across populations, a small number of common
    haplotypes account for most individuals, while a long tail of rare
    clusters captures population-specific genomic diversity.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-white rounded-2xl border p-4">
      <img src="/figures/haplotype_rank_abundance.png" />
    </div>

    <div className="bg-white rounded-2xl border p-4">
      <img src="/figures/haplotype_bar_linear.png" />
    </div>

  </div>

</div>

  </div>
</section>

      
       
   

      {/* MODELS */}
<section id="models" className="py-24 bg-slate-900 text-white">
  <div className="max-w-6xl mx-auto px-8">

    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-4">
        Predictive Modeling
      </h2>

      <p className="text-slate-300 max-w-3xl text-lg">
        Haploblocks transform genomic variation into structured genomic hashes
        that can be used as features for machine learning models. These models
        associate local genomic backgrounds with phenotypes through
        haploblock-specific contributions.
      </p>
    </div>

    {/* FRAMEWORK */}
    <div className="mb-20">

      <h3 className="text-2xl font-semibold mb-8">
        Framework
      </h3>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 rounded-2xl p-6">
          <div className="text-purple-400 font-semibold mb-3">
            1. Haploblock Discovery
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            The genome is partitioned into recombination-defined haploblocks,
            capturing local inheritance patterns and genomic background.
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          <div className="text-purple-400 font-semibold mb-3">
            2. Genomic Hash Encoding
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            Haploblock clusters are converted into compact genomic hashes that
            uniquely encode chromosome, haploblock, cluster identity and
            optional variant information.
          </p>
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          <div className="text-purple-400 font-semibold mb-3">
            3. Predictive Modeling
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            Machine learning models learn haploblock-specific weights and
            interactions to associate genomic backgrounds with phenotypes.
          </p>
        </div>

      </div>
    </div>

    {/* FLOW */}
    <div className="mb-20">

      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-3xl p-10 border border-purple-500/20">

        <div className="flex flex-wrap justify-center items-center gap-4 text-center">

          <div className="px-5 py-3 rounded-xl bg-white/10">
            Genome
          </div>

          <div>→</div>

          <div className="px-5 py-3 rounded-xl bg-white/10">
            Haploblocks
          </div>

          <div>→</div>

          <div className="px-5 py-3 rounded-xl bg-white/10">
            Genomic Hashes
          </div>

          <div>→</div>

          <div className="px-5 py-3 rounded-xl bg-white/10">
            Machine Learning
          </div>

          <div>→</div>

          <div className="px-5 py-3 rounded-xl bg-purple-600">
            Phenotypes
          </div>

        </div>

      </div>

    </div>

    {/* APPLICATIONS */}
    <div>

      <h3 className="text-2xl font-semibold mb-8">
        Applications
      </h3>

      <div className="bg-white text-slate-900 rounded-3xl p-8">

        <h4 className="text-2xl font-bold mb-2">
          Med_SNP_Deconvolution
        </h4>

        <div className="text-purple-700 font-medium mb-6">
          Privacy-Preserving Ancestry Inference
        </div>

        <p className="text-slate-700 leading-relaxed mb-8">
          Med_SNP_Deconvolution transforms phased variants into
          recombination-defined haploblock cluster identifiers. These genomic
          hashes preserve population structure while obscuring individual-level
          variation, enabling distributed ancestry prediction using XGBoost,
          deep learning and NVIDIA FLARE federated learning infrastructure.
        </p>

        {/* MODEL FIGURE */}
        <img
          src="/figures/all_metrics_heatmap.png"
          alt="Med SNP Deconvolution"
          className="rounded-2xl border mb-8"
        />

        <div className="flex gap-4">

          <a
            href="https://osf.io/preprints/biohackrxiv/5psfj_v1"
            className="px-5 py-3 rounded-xl bg-slate-900 text-white"
          >
            Read Paper
          </a>

          <a
            href="https://github.com/collaborativebioinformatics/Med_SNP_Deconvolution"
            className="px-5 py-3 rounded-xl border"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-8 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Haploblocks Project
      </footer>
    </div>
  );
}
