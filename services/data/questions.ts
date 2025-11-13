export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  rationale: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Struktur data Graph terdiri dari dua komponen utama yang saling terhubung. Kedua komponen tersebut adalah...",
    options: ["Root dan Leaf", "Header dan Pointer", "Node (Vertex) dan Sisi (Edge)", "Kolom dan Baris"],
    answer: "Node (Vertex) dan Sisi (Edge)",
    rationale: "Graph adalah koleksi dari simpul (node/vertex) dan garis penghubung (sisi/edge). Opsi A (Root dan Leaf) adalah istilah untuk Tree."
  },
  {
    id: 2,
    question: "Struktur data Tree dapat didefinisikan sebagai jenis Graph khusus yang memiliki dua sifat penting, yaitu...",
    options: ["Berbobot dan Memiliki Siklus", "Berarah dan Tidak Terhubung", "Terhubung dan Tidak Memiliki Siklus", "Multigraph dan Tidak Berbobot"],
    answer: "Terhubung dan Tidak Memiliki Siklus",
    rationale: "Tree adalah jenis Graph yang harus terhubung dan bersifat asiklik (tidak memiliki siklus). Opsi A dan B salah karena bertentangan dengan sifat dasar Tree."
  },
  {
    id: 3,
    question: "Perbedaan paling mendasar antara struktur data Graph secara umum dan Tree adalah terkait dengan...",
    options: ["Arah hubungan antar node", "Banyaknya node", "Keberadaan siklus (cycle)", "Representasi data (Matriks atau List)"],
    answer: "Keberadaan siklus (cycle)",
    rationale: "Keberadaan siklus (cycle) adalah ciri khas. Tree wajib asiklik, sedangkan Graph umum boleh memiliki siklus. Opsi A dan D berlaku untuk keduanya."
  },
  {
    id: 4,
    question: "Dalam struktur data Tree, node spesial yang berada paling atas dalam hierarki dan merupakan satu-satunya node tanpa node induk (parent) disebut...",
    options: ["Level", "Leaf", "Root", "Path"],
    answer: "Root",
    rationale: "Root (akar) adalah node awal/tertinggi dan satu-satunya node tanpa parent. Opsi B (Leaf) adalah node yang tidak memiliki anak (child)."
  },
  {
    id: 5,
    question: "Ketika setiap sisi (edge) dalam sebuah Graph memiliki nilai, biaya, atau jarak yang terkait dengannya, Graph tersebut dinamakan...",
    options: ["Graph Tidak Berarah (Undirected Graph)", "Graph Berbobot (Weighted Graph)", "Graph Siklus (Cyclic Graph)", "Graph Lengkap (Complete Graph)"],
    answer: "Graph Berbobot (Weighted Graph)",
    rationale: "Nilai yang melekat pada sisi (biaya, jarak) disebut Bobot (Weight). Opsi A, C, dan D mengacu pada sifat struktural/arah, bukan nilai."
  },
  {
    id: 6,
    question: "Node dalam struktur data Tree yang tidak memiliki node anak (child) disebut sebagai...",
    options: ["Node Root", "Node Parent", "Node Daun (Leaf Node)", "Node Internal"],
    answer: "Node Daun (Leaf Node)",
    rationale: "Node Daun (Leaf) adalah node yang tidak bercabang lagi, artinya tidak memiliki node anak. Opsi A (Root) adalah node teratas, bukan node yang paling bawah/terminal."
  },
  {
    id: 7,
    question: "Urutan node yang dilalui dari satu node awal ke node tujuan dalam struktur Graph, tanpa mengulangi sisi yang sama, disebut...",
    options: ["Bobot", "Siklus", "Derajat (Degree)", "Jalur (Path)"],
    answer: "Jalur (Path)",
    rationale: "Jalur (Path) adalah serangkaian sisi yang dilalui dari node awal ke node tujuan. Opsi B (Siklus) adalah Path yang kembali ke node awal."
  },
  {
    id: 8,
    question: "Sebuah Graph di mana setiap sisinya memiliki orientasi atau arah tertentu (misalnya dari A -> B) disebut sebagai...",
    options: ["Graph Tidak Berarah (Undirected Graph)", "Graph Lengkap (Complete Graph)", "Graph Berbobot (Weighted Graph)", "Graph Berarah (Directed Graph)"],
    answer: "Graph Berarah (Directed Graph)",
    rationale: "Graph Berarah (Directed Graph) menggunakan panah pada sisi untuk menunjukkan aliran satu arah. Opsi A (Tidak Berarah) berarti sisi berlaku dua arah."
  },
  {
    id: 9,
    question: "Struktur data Binary Tree (Pohon Biner) memiliki batasan spesifik. Batasan utama tersebut adalah...",
    options: ["Setiap node harus memiliki setidaknya dua anak.", "Setiap node hanya boleh memiliki maksimum dua anak.", "Semua node harus berada pada level yang sama.", "Tidak boleh ada node Leaf."],
    answer: "Setiap node hanya boleh memiliki maksimum dua anak.",
    rationale: "Definisi Binary Tree adalah membatasi jumlah anak menjadi maksimum dua per node. Opsi A salah karena node boleh hanya memiliki 0 atau 1 anak."
  },
  {
    id: 10,
    question: "Representasi data Graph di komputer menggunakan array dua dimensi, di mana entri (i, j) menunjukkan adanya sisi antara Node i dan Node j, disebut...",
    options: ["Binary Search Tree", "Matriks Ketetanggaan (Adjacency Matrix)", "Linked List", "List Ketetanggaan (Adjacency List)"],
    answer: "Matriks Ketetanggaan (Adjacency Matrix)",
    rationale: "Representasi Graph menggunakan array 2D yang mencatat hubungan 'tetangga' disebut Matriks Ketetanggaan. Opsi D (List Ketetanggaan) menggunakan array berisi Linked List, bukan array 2D tunggal."
  }
];
