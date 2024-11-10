function saveNote() {
    var noteInput = document.getElementById("noteInput").value;
    if (noteInput.trim() === "") {
        alert("Por favor, ingresa una nota válida.");
        return;
    }

    var noteList = document.getElementById("noteList");
    var li = document.createElement("li");
    li.textContent = noteInput;

    var editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = function () {
        var updatedNote = prompt("Edita la nota:", noteInput);
        if (updatedNote !== null && updatedNote.trim() !== "") {
            li.textContent = updatedNote;
            // Actualizar la nota en el almacenamiento local del navegador
            localStorage.setItem(key, updatedNote);
        }
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function () {
        if (confirm("¿Estás seguro de que quieres eliminar esta nota?")) {
            noteList.removeChild(li);
            // Eliminar la nota del almacenamiento local del navegador
            localStorage.removeItem(key);
        }
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    noteList.appendChild(li);

    // Guardar la nota en el almacenamiento local del navegador
    var key = "note_" + Date.now();
    localStorage.setItem(key, noteInput);

    // Limpiar el campo de entrada después de guardar la nota
    document.getElementById("noteInput").value = "";
}

// Cargar las notas guardadas al cargar la página
window.onload = function () {
    var noteList = document.getElementById("noteList");
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.includes("note_")) {
            var li = document.createElement("li");
            var noteContent = localStorage.getItem(key);
            li.textContent = noteContent;

            var editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.onclick = function () {
                var updatedNote = prompt("Edita la nota:", noteContent);
                if (updatedNote !== null && updatedNote.trim() !== "") {
                    li.textContent = updatedNote;
                    // Actualizar la nota en el almacenamiento local del navegador
                    localStorage.setItem(key, updatedNote);
                }
            };

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.onclick = function () {
                if (confirm("¿Estás seguro de que quieres eliminar esta nota?")) {
                    noteList.removeChild(li);
                    // Eliminar la nota del almacenamiento local del navegador
                    localStorage.removeItem(key);
                }
            };

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            noteList.appendChild(li);
        }
    }
};
