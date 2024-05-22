class ButtonComponent extends HTMLElement {
  constructor() {
    super();

    this.isDataDisplayed = false;

    this.render();
  }

  connectedCallback() {
    this.getNotes();
  }

  render() {
    this.innerHTML = `
    <style>

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #6D9886;
    color: #F6F6F6;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  button:hover {
    transition: 0.5s ease;
    background-color: #212121;
    color: #F6F6F6;
  }

  .note {
    display: grid;
    grid-template-columns: auto;
    border: 4px solid #D9CAB3;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #6D9886;
    max-width: 60rem;
  }

  .note h2 {
    margin-top: 0;
    color: #F6F6F6;
  }

  .note p {
    margin-bottom: 5px;
    color: #F6F6F6;
    padding: 5px;
    padding-left: 2px;
  }

  .delete-button {
    background-color: #F6F6F6;
    color: #6D9886;
    font-weight: bolder;
  }

  .delete-button:hover {
    background-color: #F6F6F6;
    color: red;
  }

  #loadingIndicator {
    background-color: red;
    margin-bottom: 2rem;
    padding: 0.8rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bolder;
    font-size: 15px;
  }


  @media only screen and (max-width: 500px) {
    .note {
    max-width: 7.3rem;
    font-size: 8px;
    }

    button {
      padding: 7px 10px;
    }

  }
</style>

<button type="button" id="cekNotes">Cek Notes</button>
<p id="loadingIndicator" style="display: none;">Menunggu semua data muncul..</p>
    `;

    const button = document.getElementById("cekNotes");
    button.addEventListener("click", () => this.toggleDisplayData(), {
      once: true,
    });

    this.appendChild(button);

    document.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const newNote = {};

      formData.forEach((value, key) => {
        newNote[key] = value;
      });

      this.insertNotes(newNote);

      this.notesData = [];

      this.notesData.push(newNote);

      this.displayData();
    });
  }

  toggleDisplayData() {
    if (this.isDataDisplayed) {
      this.hideData();
    } else {
      this.displayData();
    }
  }

  displayData() {
    const notesData = [];

    if (!this.isDataDisplayed) {
      const existingNotesHTML = notesData
        .map(
          (note) => `
            <div class="note">
              <h2>${note.title}</h2>
              <p>${note.body}</p>
              <p>Created At: ${new Date(note.createdAt)
                .toISOString()
                .slice(0, 10)}</p>
                <button type="submit" class="delete-button" data-id="${
                  note.id
                }">Delete</button>
            </div>
          `,
        )
        .join("");

      this.dataDisplay = document.createElement("div");
      this.dataDisplay.innerHTML = existingNotesHTML;
      this.appendChild(this.dataDisplay);

      this.isDataDisplayed = true;
    }

    const newNotesHTML = this.notesData

      .map(
        (note) => `
          <div class="note">
            <h2>${note.title}</h2>
            <p>${note.body}</p>
            <p>Created At: ${new Date(note.createdAt)
              .toISOString()
              .slice(0, 10)}</p>
            <button type="submit" class="delete-button" data-id="${
              note.id
            }">Delete</button>
          </div>
        `,
      )
      .join("");

    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-button")) {
        const note_id = event.target.dataset.id;

        this.notesData = this.notesData.filter((note) => note.id !== note_id);

        event.target.parentNode.remove();
      }
    });

    const newNotesDisplay = document.createElement("div");
    newNotesDisplay.innerHTML = newNotesHTML;
    this.appendChild(newNotesDisplay);
  }

  hideData() {
    if (this.dataDisplay) {
      this.removeChild(this.dataDisplay);
      this.isDataDisplayed = false;
    }
  }

  insertNotes = async (note) => {
    const requestBody = {
      title: note.title,
      body: note.body,
    };

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "12345",
        },
        body: JSON.stringify(requestBody),
      };

      const response = await fetch(
        "https://notes-api.dicoding.dev/v2/notes",
        options,
      );
      const responseJson = await response.json();
      if (responseJson.status === "success") {
        console.log("Note ditambahkan:", responseJson);
      } else {
        alert("Gagal menambahkan data, coba lagi");

        console.error(
          "Gagal menambahkan note, coba lagi.",
          responseJson.message,
        );
      }
    } catch (error) {
      alert("Sedang error, Coba lagi lain kali");
      console.error("Gagal menambahkan. Coba nanti.");
    }
  };

  removeNotes = (note_id) => {
    fetch(`https://notes-api.dicoding.dev/v2/notes/${note_id}`, {
      method: "DELETE",
      headers: {
        "X-Auth-Token": "12345",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.status === "success") {
          console.log("Note terhapus:", responseJson);
        } else {
          alert("Gagal hapus data, Coba lagi lain kali");
          console.error("Failed to delete note:", responseJson.message);
        }
      })
      .catch((error) => {
        console.error("Gagal hapus notes, coba lagi.");
        showResponseMessage(error);
        alert("Sedang error, Coba lagi lain kali");
      });
  };

  getNotes = async () => {
    try {
      const loadingIndicator = document.getElementById("loadingIndicator");
      loadingIndicator.style.display = "block";

      const response = await fetch("https://notes-api.dicoding.dev/v2/notes");
      const responseJson = await response.json();

      if (responseJson.status === "success") {
        this.notesData = responseJson.data;
        this.displayData();
        console.log("Note ditampilkan:", responseJson);
      } else {
        console.error("Gagal menampilkan data, ", responseJson.message);
        alert("Gagal menampilkan data, Coba lagi lain kali");
      }
    } catch (error) {
      alert("Sedang error, Coba lagi lain kali");

      showResponseMessage(error);
    } finally {
      setTimeout(() => {
        const loadingIndicator = document.getElementById("loadingIndicator");
        loadingIndicator.style.display = "none";
      }, 3000);
    }
  };
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const note_id = event.target.dataset.id;

    const buttonComponent = document.querySelector("button-component");
    buttonComponent.removeNotes(note_id);
  }
});

customElements.define("button-component", ButtonComponent);
