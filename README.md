# Church Business - Angular Template

A professional Angular 17 template website for Catholic churches with multi-language support and database connectivity.

## Features

- ✅ **Multi-language Support**: Available in English, French, and Spanish
- ✅ **Responsive Design**: Mobile-friendly layout
- ✅ **Modern UI**: Clean and professional church-themed interface
- ✅ **Database Ready**: SQL Server integration setup
- ✅ **Routing**: Multi-page application with comprehensive navigation
- ✅ **Internationalization**: Complete i18n implementation with custom translation service
- ✅ **Catholic Church Content**: Appropriate content for Catholic parish websites

## Project Structure

```
church-business/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/              # Navigation header with language switcher
│   │   │   ├── footer/              # Footer component
│   │   │   └── language-switcher/   # Language selection component
│   │   ├── pages/
│   │   │   ├── home/                # Homepage with parish mission
│   │   │   ├── parish/              # Parish information page
│   │   │   ├── masses/              # Mass schedule page
│   │   │   ├── events/              # Parish events page
│   │   │   ├── news/                # Parish news and bulletins
│   │   │   ├── committees/          # Parish committees information
│   │   │   ├── volunteering/        # Volunteer opportunities
│   │   │   ├── campaigns/           # Parish campaigns
│   │   │   ├── donation/            # Donation information page
│   │   │   ├── contact/             # Contact information page
│   │   │   └── services/            # Legacy services page
│   │   ├── services/
│   │   │   ├── database.service.ts  # Database service for backend API
│   │   │   └── translation.service.ts # Translation service
│   │   ├── app.routes.ts            # Route configuration
│   │   └── app.component.ts         # Main app component
│   └── assets/
│       └── i18n/                    # Translation files (en, fr, es)
├── server.js                        # Backend server example (SQL Server)
└── DATABASE_SETUP.md                # Database setup instructions
```

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
ng serve
```

Navigate to `http://localhost:4400/`. The application will automatically reload if you change any of the source files.

### 3. Build for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Pages

The church website includes the following pages:

### Main Pages
- **Home** - Welcome page with parish mission and highlights
- **Our Parish** (Notre paroisse) - Parish information, history, and pastor details
- **Masses** (Messes) - Complete mass schedule including weekday, weekend, and holy days
- **Events** (Événements) - Parish events and calendar
- **News** (Nouvelles) - Parish news, bulletins, and announcements
- **Committees** (Comités) - Information about parish committees
- **Volunteering** (Bénévolat) - Volunteer opportunities and ministries
- **Campaigns** (Campagnes) - Parish campaigns and fundraising initiatives
- **Donation** (Faire un don) - Donation options and information
- **Contact** - Contact information and office hours

## Multi-Language Support

The application supports three languages:
- **English** (en) - Default
- **French** (fr)
- **Spanish** (es / Español)

### Using the Language Switcher

Click the language buttons in the header to switch between languages. The application will remember your language preference.

### Translation Files

Translation files are located in `src/assets/i18n/`:
- `en.json` - English translations
- `fr.json` - French translations
- `es.json` - Spanish translations

All content is fully translated including:
- Navigation menu items
- Page headings and content
- Mass schedules
- Parish information
- Footer text

To add more languages:
1. Create a new JSON file in `src/assets/i18n/`
2. Add the language to the `languages` array in `language-switcher.component.ts`
3. Update the translation service to load the new language file

## Database Connection

The application is configured to connect to SQL Server:

- **Server**: localhost
- **User**: developer
- **Password**: Stored in .env file
- **Database**: church_business

⚠️ **Security Note**: Direct database connections from the frontend are not recommended. Please see `DATABASE_SETUP.md` for proper backend setup instructions.

### Backend Setup

1. **Install backend dependencies**:
   ```bash
   npm install express mssql cors
   ```

2. **Start the backend server**:
   ```bash
   node server.js
   ```

3. **See full setup instructions**: Refer to `DATABASE_SETUP.md`

## Contact Information

The contact page displays default information that should be customized:
- **Address**: 7227 Newman Boulevard, Unit 1504, Montreal, Quebec, H8N 0H7
- **Phone**: (514) 555-0123
- **Email**: info@catholicparish.com
- **Office Hours**: Monday - Friday: 9:00 AM - 5:00 PM

## Running Tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Technology Stack

- **Angular**: 17.3.0
- **TypeScript**: 5.4.2
- **Custom Translation Service**: For internationalization
- **MSSQL**: Latest (for SQL Server connectivity)
- **SCSS**: For styling

## Further Development

### Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Customization

- Update parish information in translation files (`src/assets/i18n/*.json`)
- Modify colors and styles in component SCSS files
- Add new pages by creating components in `src/app/pages/`
- Configure database connection in `src/app/services/database.service.ts`
- Update mass schedules in the translation files
- Add parish-specific events and news

## Parish-Specific Features

This template is designed specifically for Catholic churches and includes:

- **Mass Schedule**: Comprehensive mass times for weekdays, weekends, and holy days
- **Sacraments**: Information about sacraments and religious rites
- **Volunteer Opportunities**: Lectors, Eucharistic Ministers, Ushers, Choir
- **Parish Committees**: Liturgy, Finance, and Pastoral councils
- **Donation Options**: Online, by mail, and in-person giving
- **Virtual Masses**: Support for livestreamed celebrations
- **Mass Intentions**: Information about requesting mass intentions
- **Parish History**: Section for parish background and history

## Support

For more help on Angular CLI, use `ng help` or check out the [Angular CLI Documentation](https://angular.io/cli).

## License

This project is a template and can be freely used and modified for your church needs.

