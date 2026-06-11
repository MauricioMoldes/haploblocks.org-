import React from "react";
 
const SECTION_MAX = "max-w-6xl mx-auto px-8";
const SECTION_PAD = "py-24";
 
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
 
      {/* NAV */}
      <header className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tight">Haploblocks</div>
        <nav className="flex gap-6 text-sm text-slate-600">
          <a href="#abstract" className="hover:text-slate-900">Abstract</a>
          <a href="#pipeline" className="hover:text-slate-900">Pipeline</a>
          <a href="#results" className="hover:text-slate-900">Results</a>
          <a href="#modeling" className="hover:text-slate-900">Modeling</a>
        </nav>
      </header>
 
      {/* HERO */}
      <section className={`${SECTION_MAX} pt-24 pb-24 grid md:grid-cols-2 gap-12 items-center`}>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Decoding Genotype–Phenotype Interactions
            <span className="block text-slate-500 mt-2">using Genomic Hashes</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            A scalable framework that discretizes the genome into haploblocks and
            represents each individual as a compact genomic hash for efficient
            genotype–phenotype mapping.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="https://osf.io/preprints/biohackrxiv/xhkc3_v1" className="px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800">
              Read Paper
            </a>
            <a href="https://github.com/collaborativebioinformatics/Haploblock_Clusters_ElixirBH25" className="px-5 py-3 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100">
              GitHub
            </a>
            <a href="#" className="px-5 py-3 rounded-xl border border-slate-300 text-sm font-medium hover:bg-slate-100">
              Dataset
            </a>
          </div>
        </div>
 
        {/* VISUAL BLOCK */}
        <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm p-6 overflow-hidden">
          <div className="text-slate-500 mb-4 font-medium">Genomic Cluster Engine</div>
          <div className="font-mono text-xs">
            <div className="mb-4 text-slate-600">64-bit Hash Encoding Architecture</div>
            <div className="grid grid-cols-5 gap-2 text-center text-[10px] mb-3">
              <div className="bg-slate-900 text-white rounded p-2">S (4)</div>
              <div className="bg-blue-100 rounded p-2">CHROM (10)</div>
              <div className="bg-indigo-100 rounded p-2">HAPLO (20)</div>
              <div className="bg-purple-100 rounded p-2">CLUSTER (20)</div>
              <div className="bg-emerald-100 rounded p-2">VAR (10)</div>
            </div>
            <div className="mt-5 border rounded-lg bg-white p-4 space-y-2">
              <div className="text-slate-500 text-[11px]">Example encoded genomic hash</div>
              <div className="flex justify-between text-xs"><span>Strand</span><span className="font-mono">0001</span></div>
              <div className="flex justify-between text-xs"><span>Chromosome</span><span className="font-mono">0000010110</span></div>
              <div className="flex justify-between text-xs"><span>Haploblock</span><span className="font-mono">101100101001</span></div>
              <div className="flex justify-between text-xs"><span>Cluster</span><span className="font-mono">00011</span></div>
              <div className="flex justify-between text-xs"><span>Variants</span><span className="font-mono">A/T/G/C encoded</span></div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ABSTRACT */}
      <section id="abstract" className={`max-w-4xl mx-auto px-8 ${SECTION_PAD}`}>
        <h2 className="text-2xl font-bold mb-6">Abstract</h2>
        <p className="text-slate-700 leading-relaxed text-lg">
          Despite advances in genome sequencing, the relationship between genotype and phenotype remains incompletely understood due to complex interactions between variants and genomic background. We introduce a haploblock-based framework that discretizes the genome into recombination-defined regions and encodes local genomic structure as binary hashes. This representation enables scalable clustering of individuals and supports machine learning models for genotype–phenotype mapping.
        </p>
      </section>
 
      {/* PIPELINE */}
      <section id="pipeline" className="bg-slate-900 text-white">
        <div className={`${SECTION_MAX} ${SECTION_PAD}`}>
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
      <section id="results" className="bg-sky-50/60 border-y border-sky-100">
        <div className={`${SECTION_MAX} ${SECTION_PAD}`}>
 
          <h2 className="text-3xl font-bold mb-4">Results</h2>
          <p className="text-slate-600 max-w-3xl mb-16 text-lg leading-relaxed">
            We applied the Haploblocks pipeline to the 1000 Genomes Project using the
            GRCh38 reference genome and genome-wide recombination maps. Across all
            autosomes and chromosome X, we identified recombination-defined genomic
            regions that serve as the foundation for genomic hash generation and
            downstream genotype–phenotype modeling.
          </p>
 
          {/* DATASET */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold mb-6">Dataset</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-sm text-slate-500 mb-2">Cohort</div>
                <div className="text-2xl font-bold">1000 Genomes Project</div>
                <div className="mt-3 text-sm text-slate-600">2,548 individuals across 26 populations.</div>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-sm text-slate-500 mb-2">Reference Genome</div>
                <div className="text-2xl font-bold">GRCh38</div>
                <div className="mt-3 text-sm text-slate-600">UCSC Genome Browser assembly.</div>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-sm text-slate-500 mb-2">Coverage</div>
                <div className="text-2xl font-bold">chr1–22 + chrX</div>
                <div className="mt-3 text-sm text-slate-600">Whole-genome haploblock segmentation using recombination maps.</div>
              </div>
            </div>
          </div>
 
          {/* HAPLOBLOCK DISCOVERY */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold mb-6">Haploblock Discovery</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "39,141", label: "Haploblocks" },
                { value: "2,548",  label: "Individuals" },
                { value: "26",     label: "Populations" },
                { value: "23",     label: "Chromosomes" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-800 text-white p-8 text-center shadow-lg">
                  <div className="text-4xl font-bold">{item.value}</div>
                  <div className="mt-2 text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
 

          {/* GENOME-WIDE FIGURES */}
          <div className="mb-20">
            <h3 className="text-xl font-semibold mb-6">Genome-wide structure</h3>
            <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
              {[
                { t: "Size distribution",       i: "01_size_distribution.png" },
                { t: "Size distribution per Chromossome",       i: "02_size_per_chr_boxplot.png" },
                { t: "ECDF",       i: "03_ecdf.png" },
                { t: "Blocks per chromosome",    i: "04_blocks_per_chr.png" },
                { t: "Mean size per chromosome", i: "05_mean_size_chr.png" },               
                { t: "Size vs genomic position", i: "06_size_vs_position.png" },
                { t: "Genomic hash density",     i: "07_density_per_chr.png" },
                { t: "Size Violin", i: "08_size_violin_per_chr.png" },
                { t: "Cumulative Coverage",     i: "09_cumulative_coverage.png" }
              ].map((f) => (
                <div key={f.i} className="min-w-[85%] snap-center">
                  <div className="mb-3 text-sm font-medium text-slate-700">{f.t}</div>
                  <img src={`/figures/${f.i}`} className="rounded-xl border bg-white shadow-sm" alt={f.t} />
                </div>
              ))}
            </div>               

            <div className="flex gap-4">
                  <a href="https://github.com/MauricioMoldes/haploblocks-qc" className="px-5 py-3 rounded-xl bg-slate-900 text-white">View results on GitHub</a>
          
          </div>
          </div>


 
          {/* CLUSTERING RESULTS */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Haploblock Clustering Landscape</h3>
            <p className="text-slate-600 max-w-3xl mb-10">
              Haploblock clusters reveal how genomic backgrounds are shared across individuals.
              Most haploblocks are dominated by a small number of common cluster states,
              while a long tail of rare clusters captures fine-scale population structure,
              ancestry-specific variation, and local recombination history.
            </p>
            <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
              {[
                { t: "Cluster rank–abundance (global structure)", i: "08_rank_abundance_all_chromosomes.png" },
                { t: "Shannon Entropy per Chromossome",                 i: "02_entropy_per_chromosome.png" },
                { t: "Dominance per Chromossome",              i: "03_dominance_per_chromosome.png" },
                { t: "Entropy Genome Wide ",               i: "04_entropy_genome_wide.png" },
                { t: "Dominance Genome Wide.png",             i: "05_dominance_genome_wide.png" },
                { t: "Singleton Rate Per Chromosome.png",        i: "06_singleton_rate_per_chromosome.png" },
                { t: "happloytp Balance per Chromossome",               i: "07_hap_balance_per_chromosome.png" }                
              ].map((f) => (
                <div key={f.i} className="min-w-[85%] snap-center">
                  <div className="mb-3 text-sm font-medium text-slate-700">{f.t}</div>
                  <img src={`/figures/${f.i}`} className="rounded-xl border bg-white shadow-sm" alt={f.t} />
                </div>
              ))}
            </div>
            <div className="flex gap-4">
                  <a href="https://github.com/MauricioMoldes/haploblocks-qc" className="px-5 py-3 rounded-xl bg-slate-900 text-white">View results on GitHub</a>
          
          </div>
          </div>
 
        </div>
      </section>
 
      {/* PREDICTIVE MODELING */}
      <section id="modeling" className="bg-slate-900 text-white">
        <div className={`${SECTION_MAX} ${SECTION_PAD}`}>
 
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Predictive Modeling</h2>
            <p className="text-slate-300 max-w-3xl text-lg">
              Haploblocks transform genomic variation into structured genomic hashes
              that can be used as features for machine learning models. These models
              associate local genomic backgrounds with phenotypes through
              haploblock-specific contributions.
            </p>
          </div>
 
          {/* FRAMEWORK */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8">Framework</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "1. Haploblock Discovery",
                  body: "The genome is partitioned into recombination-defined haploblocks, capturing local inheritance patterns and genomic background.",
                },
                {
                  title: "2. Genomic Hash Encoding",
                  body: "Haploblock clusters are converted into compact genomic hashes that uniquely encode chromosome, haploblock, cluster identity and optional variant information.",
                },
                {
                  title: "3. Predictive Modeling",
                  body: "Machine learning models learn haploblock-specific weights and interactions to associate genomic backgrounds with phenotypes.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white/5 rounded-2xl p-6">
                  <div className="text-purple-400 font-semibold mb-3">{item.title}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
 
          {/* FLOW */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-3xl p-10 border border-purple-500/20">
              <div className="flex flex-wrap justify-center items-center gap-4 text-center">
                {["Genome", "Haploblocks", "Genomic Hashes", "Machine Learning"].map((label) => (
                  <React.Fragment key={label}>
                    <div className="px-5 py-3 rounded-xl bg-white/10">{label}</div>
                    <div>→</div>
                  </React.Fragment>
                ))}
                <div className="px-5 py-3 rounded-xl bg-purple-600">Phenotypes</div>
              </div>
            </div>
          </div>
 
          {/* APPLICATIONS */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Applications</h3>
            <div className="space-y-10">
 
              {/* APP 1 */}
              <div className="relative bg-white text-slate-900 rounded-3xl p-8 shadow-sm border">
                <h4 className="text-2xl font-bold mb-2">Med_SNP_Deconvolution</h4>
                <div className="text-purple-700 font-medium mb-6">Privacy-Preserving Ancestry Inference</div>
                <img src="/figures/all_metrics_heatmap_gh.png" className="w-full h-40 object-cover rounded-xl mb-6 border" alt="Med SNP Deconvolution" />
                <p className="text-slate-700 leading-relaxed mb-8">
                  Med_SNP_Deconvolution transforms phased variants into recombination-defined
                  haploblock cluster identifiers, enabling distributed ancestry inference while
                  preserving privacy through genomic hash representations.
                </p>
                <div className="flex gap-4">
                  <a href="https://osf.io/preprints/biohackrxiv/5psfj_v1" className="px-5 py-3 rounded-xl bg-slate-900 text-white">Paper</a>
                  <a href="https://github.com/collaborativebioinformatics/Med_SNP_Deconvolution" className="px-5 py-3 rounded-xl border">GitHub</a>
                </div>
                {/*
                <div className="absolute bottom-6 right-6 flex items-center gap-3 opacity-70">
                  <img src="/figures/stanford-university.png" className="h-8 w-auto object-contain" alt="Stanford" />
                  <img src="/figures/CMU_Logo_Stack_Red.png" className="h-8 w-auto object-contain" alt="CMU" />
                </div>
                */}
              </div>
 
              {/* APP 2 */}
              <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 text-slate-900 rounded-3xl p-8 border border-indigo-100">
                <h4 className="text-2xl font-bold mb-2">Haploblock Predictive Modeling</h4>
                <div className="text-indigo-700 font-medium mb-6">Genotype–Phenotype Mapping via Genomic Hashes</div>
                <div className="font-mono text-xs bg-slate-50 border rounded-xl p-4 overflow-x-auto">
                  yᵢ = Σₕ αᵢₕ (xᵢₕᵀ Uₕ) + β₀
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4 text-xs text-slate-600">
                  <div>
                    <b>yᵢ</b> phenotype<br />
                    <b>αᵢₕ</b> haploblock-specific weight<br />
                    <b>xᵢₕ</b> binary genomic hash vector
                  </div>
                  <div>
                    <b>Uₕ</b> projection vector per haploblock<br />
                    <b>β₀</b> intercept<br />
                    learned via gradient descent (MSE loss)
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 mt-6">
                  Haploblock-level binary representations are used to learn structured
                  phenotype associations through weighted projection models over genomic hashes.
                </p>
                <div className="flex gap-4">
                  <a href="https://osf.io/preprints/biohackrxiv/xhkc3_v1" className="px-5 py-3 rounded-xl bg-slate-900 text-white">Paper</a>
                  <a href="https://github.com/collaborativebioinformatics/Haploblock_Clusters_ElixirBH25" className="px-5 py-3 rounded-xl border border-slate-300">GitHub</a>
                </div>
                {/*
                <div className="absolute bottom-6 right-6 flex items-center gap-3 opacity-70">
                  <img src="/figures/Logo_Rigshospitalet.png" className="h-8 w-auto object-contain" alt="Stanford" />
                  <img src="/figures/logo-pi.png" className="h-8 w-auto object-contain" alt="CMU" />
	            <img src="/figures/logo-pi.png" className="h-8 w-auto object-contain" alt="CMU" />
	            <img src="/figures/CMU_Logo_Stack_Red.png" className="h-8 w-auto object-contain" alt="CMU" />
                </div>
                */}
              </div>
 
              {/* APP 3 */}
              <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-sm border">
                <h4 className="text-2xl font-bold mb-2">Haploblock Graph Builder</h4>
                <div className="text-slate-700 font-medium mb-6">Co-occurrence Graphs of Genomic Background Structure</div>
                <img src="/figures/haploblock_co_occurence_graph.png" className="w-full h-40 object-cover rounded-xl mb-6 border" alt="Haploblock Graph Builder" />
                <p className="text-slate-700 leading-relaxed mb-8">
                  Converts haploblock clustering results into graph representations that encode
                  how genomic clusters co-occur across individuals, enabling network-based
                  modeling of genomic background structure.
                </p>
                <ul className="text-sm text-slate-600 mb-8 space-y-1">
                  <li>• genotype–phenotype association</li>
                  <li>• genomic background modeling</li>
                  <li>• network feature extraction</li>
                  <li>• ML on genomic hashes</li>
                </ul>
                <div className="flex gap-4">
                  <a href="https://github.com/MauricioMoldes/haploblock-graph-builder" className="px-5 py-3 rounded-xl bg-slate-900 text-white">GitHub</a>
                  <a href="#" className="px-5 py-3 rounded-xl border opacity-60 pointer-events-none">Paper (coming soon)</a>
                </div>
              </div>
 
              {/* APP 4 */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900 rounded-3xl p-8 border">
                <h4 className="text-2xl font-bold mb-2">Synthetic Node Expansion</h4>
                <div className="text-slate-700 font-medium mb-6">Expanding Genomic Hash Spaces via Generative Structures</div>
                <img src="/figures/haploblock_synthethic_expansion_pipeline.png" className="w-full h-40 object-cover rounded-xl mb-6 border" alt="Synthetic Node Expansion" />
                <p className="text-slate-700 leading-relaxed mb-8">
                  Synthetic node expansion generates augmented haploblock representations to
                  increase resolution of sparse genomic regions and improve robustness of
                  downstream predictive models.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/collaborativebioinformatics/Network_modeling_multimodal_v003" className="px-5 py-3 rounded-xl bg-slate-900 text-white">GitHub</a>
                  <a href="#" className="px-5 py-3 rounded-xl border opacity-60 pointer-events-none">Paper (coming soon)</a>
                </div>
              </div>
 
            </div>
          </div>
 
        </div>
      </section>
 
      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-8 py-10 text-sm text-slate-500">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>© {new Date().getFullYear()} Haploblocks Project</div>
          {/*
          <div className="flex items-center gap-8 opacity-80">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Amazon_Web_Services_2025.svg/500px-Amazon_Web_Services_2025.svg.png" className="h-8 object-contain" alt="AWS Open Data Registry" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Logo-nvidia-transparent-PNG.png" className="h-8 object-contain" alt="NVIDIA" />
            <img src="/logos/gefion.png" className="h-8 object-contain" alt="Gefion HPC" />
          </div>
          */}
        </div>
      </footer>
 
    </div>
  );
}
 
