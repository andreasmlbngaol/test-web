export async function GET() {
    const body = {
        message: "Hello World"
    }
    const status = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }

    return new Response(
        JSON.stringify(body),
        status
    );
}