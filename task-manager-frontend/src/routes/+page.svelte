<script>
    import { onMount } from 'svelte';

    let tasks = [];

    // Load tasks from backend
    onMount(async ()  => {
        //const res = await fetch("http://localhost:5000/tasks");
        //const res = await fetch("https://didactic-space-engine-q7wqj7759vrvf9464-5175.app.github.dev/tasks");
        const res = await fetch("/api/tasks");  // proxy forwards to backend 
        tasks = await res.json();
    });

    //loadTasks();
</script>




// Individual Frontend code in src routes .svelte 
// Display whats there in this file .
//<h1>Welcome to SvelteKit</h1>
//<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

//<h1> Welcome to Patrick</h1>
