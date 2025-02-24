interface HeaderProps
{
    title: string;
    subtitle: string;
    accentColor?: string;
}

/**
 * Main page header with accent dot
 * @param {string} title - Main header text
 * @param {string} subtitle - Subheader text
 * @param {string} accentColor - Color for accent dot
 */
export const Header = ({ title, subtitle, accentColor = '#FF5C00' }: HeaderProps) => (
    <header className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <h1 className="text-4xl md:text-6xl font-black">{title}</h1>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
            </div>
            <p className="text-gray-600 text-lg md:text-xl max-w-md">{subtitle}</p>
        </div>
    </header>
);