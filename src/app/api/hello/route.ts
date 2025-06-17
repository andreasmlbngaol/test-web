export async function GET() {
    const body = {
        database_url: process.env.DATABASE_URL
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